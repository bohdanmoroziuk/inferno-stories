import { Component } from 'inferno';

import Header from './layout/Header';
import Search from './forms/Search';
import Section from './layout/Section';
import StoriesTable from './StoriesTable';
import Button from './shared/Button';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = 5;

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search?';

const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {
  state = {
    stories: [],
    searchKey: '',
    searchTerm: DEFAULT_QUERY
  };

  componentDidMount() {
    this.makeApiCall();
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

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => this.setStories(data))
      .catch(reason => console.error(reason));
  };

  showMoreStories = page => {
    this.fetchStories(this.state.searchKey, page);
  };

  buildQueryUrl = (searchTerm, page = 0) => {
    return `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`;
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
    const { stories, searchKey, searchTerm } = this.state;

    const page =
      (stories && stories[searchKey] && stories[searchKey].page) || 0;

    const hits =
      (stories && stories[searchKey] && stories[searchKey].hits) || [];

    return (
      <main className="app">
        <div className="container">
          <Section>
            <Header />
          </Section>
          <Section>
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            />
          </Section>
          <Section>
            {stories && (
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
