import { Component } from 'inferno';

import Header from './layout/Header';
import Search from './forms/Search';
import Section from './layout/Section';
import StoriesTable from './StoriesTable';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search?';
const PARAM_SEARCH = 'query=';

class App extends Component {
  state = {
    stories: [],
    searchTerm: DEFAULT_QUERY
  };

  componentDidMount() {
    this.fetchStories(this.state.searchTerm);
  }

  setStories = data => {
    this.setState({ stories: data.hits });
  };

  fetchStories = searchTerm => {
    const queryUrl = this.buildQueryUrl(searchTerm);

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => this.setStories(data))
      .catch(reason => console.error(reason));
  };

  buildQueryUrl = searchTerm => {
    return `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}`;
  };

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    this.fetchStories(this.state.searchTerm);
  };

  onStoryDismiss = id => {
    const isNotId = story => story.objectID !== id;

    const updatedStories = this.state.stories.filter(isNotId);

    this.setState({
      stories: updatedStories
    });
  };

  render() {
    const { stories, searchTerm } = this.state;

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
                  stories,
                  onDismiss: this.onStoryDismiss
                }}
              />
            )}
          </Section>
        </div>
      </main>
    );
  }
}

export default App;
