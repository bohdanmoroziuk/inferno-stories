import { Component } from 'inferno';

import Header from './layout/Header';
import Search from './forms/Search';
import Section from './layout/Section';
import NewsTable from './NewsTable';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search?';
const PARAM_SEARCH = 'query=';

class App extends Component {
  state = {
    news: [],
    searchTerm: DEFAULT_QUERY
  };

  componentDidMount() {
    this.fetchNews();
  }

  setNews = data => {
    this.setState({ news: data.hits });
  };

  fetchNews = () => {
    const queryUrl = this.buildQueryUrl(this.state.searchTerm);

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => this.setNews(data))
      .catch(reason => console.error(reason));
  };

  buildQueryUrl = searchTerm => {
    return `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}`;
  };

  changeSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  dismissListItem = listItemId => {
    const isNotId = listItem => listItem.objectID !== listItemId;

    const updatedNews = this.state.news.filter(isNotId);

    this.setState({
      news: updatedNews
    });
  };

  filterList = () => {
    const { news, searchTerm } = this.state;

    return news.filter(listItem =>
      listItem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  render() {
    const { searchTerm } = this.state;

    const news = this.filterList();

    return (
      <main className="app">
        <div className="container">
          <Section>
            <Header />
          </Section>
          <Section>
            <Search
              query={searchTerm}
              placeholder="Enter news title"
              handleQueryChange={this.changeSearchTerm}
            />
          </Section>
          <Section>
            {news && (
              <NewsTable
                {...{
                  news,
                  hideNews: this.dismissListItem
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
