import { Component } from 'inferno';
import axios from 'axios';

import Header from './layout/Header';
import Search from './forms/Search';
import Section from './layout/Section';
import StoriesTable from './tables/StoriesTable';
import Button from './shared/Button';

import { API } from '../constants';

class App extends Component {
  _isMounted = false;

  state = {
    stories: [],
    searchKey: '',
    searchTerm: API.DEFAULT_QUERY,
    error: null
  };

  componentDidMount() {
    this._isMounted = true;

    this.makeApiCall();
  }

  componentWillMount() {
    this._isMounted = false;
  }

  makeApiCall = () => {
    const { searchTerm } = this.state;

    this.setState({ searchKey: searchTerm }, () => {
      this.needsToMakeApiCall(searchTerm) && this.fetchStories(searchTerm);
    });
  };

  needsToMakeApiCall = searchTerm => {
    return !this.state.stories[searchTerm];
  };

  setStories = data => {
    const { hits, page } = data;
    const { searchKey, stories } = this.state;

    const oldHits =
      stories && stories[searchKey] ? stories[searchKey].hits : [];

    const newHits = [...oldHits, ...hits];

    this.setState({
      stories: {
        ...stories,
        [searchKey]: {
          hits: newHits,
          page
        }
      }
    });
  };

  fetchStories = (searchTerm, page) => {
    const queryUrl = this.buildQueryUrl(searchTerm, page);

    axios(queryUrl)
      .then(result => this._isMounted && this.setStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));
  };

  showMoreStories = page => {
    this.fetchStories(this.state.searchKey, page);
  };

  buildQueryUrl = (searchTerm, page = 0) => {
    return `${API.PATH_BASE}${API.PATH_SEARCH}${
      API.PARAM_SEARCH
    }${searchTerm}&${API.PARAM_PAGE}${page}&${API.PARAM_HPP}${API.DEFAULT_HPP}`;
  };

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    this.makeApiCall();
  };

  onStoryDismiss = id => {
    const { searchKey, stories } = this.state;
    const { hits, page } = stories[searchKey];

    const isNotId = story => story.objectID !== id;

    const updatedHits = hits.filter(isNotId);

    this.setState({
      stories: {
        ...stories,
        [searchKey]: {
          hits: updatedHits,
          page
        }
      }
    });
  };

  render() {
    const { error, stories, searchKey, searchTerm } = this.state;

    const page =
      (stories && stories[searchKey] && stories[searchKey].page) || 0;

    const hits =
      (stories && stories[searchKey] && stories[searchKey].hits) || [];

    return (
      <main className="app">
        <div className="container">
          <Section>
            <Header title="Stories" />
          </Section>
          <Section>
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            />
          </Section>
          <Section>
            {error ? (
              <div className="alert alert-warning text-center" role="alert">
                Something went wrong!!!
              </div>
            ) : (
              <StoriesTable
                {...{
                  stories: hits,
                  onDismiss: this.onStoryDismiss
                }}
              />
            )}
          </Section>
          <Section>
            <Button
              className="btn btn-secondary btn-sm"
              onClick={() => this.showMoreStories(page + 1)}
            >
              More stories
            </Button>
          </Section>
        </div>
      </main>
    );
  }
}

export default App;
