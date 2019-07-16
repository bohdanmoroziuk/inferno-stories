import { Component } from 'inferno';
import { connect } from 'inferno-redux';

import Header from './layout/Header';
import Search from './forms/Search';
import Section from './layout/Section';
import LoadingStoriesTable from './tables/LoadingStoriesTable';
import Pagination from './shared/Pagination';

import { operations, selectors, constants } from '../redux/modules/stories';

/**
 * TODO:
 *  2. Implement sorting
 *  3. Refactor code
 */
class App extends Component {
  state = {
    searchKey: '',
    searchTerm: constants.API.DEFAULT_QUERY
  };

  componentDidMount() {
    this.makeApiCall();
  }

  makeApiCall = (page = 0) => {
    const { searchTerm } = this.state;

    this.setState({ searchKey: searchTerm }, () => {
      this.props.fetchStories(searchTerm, page);
    });
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

  render() {
    const { error, isLoading, data } = this.props.stories;

    const { searchTerm } = this.state;

    const page = (data && data.page) || 0;
    const totalPages = data.nbPages;

    return (
      <main className="app">
        <div className="container">
          <Section>
            <Header title={process.env.INFERNO_APP_NAME} />
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
              <LoadingStoriesTable
                {...{
                  isLoading,
                  stories: data.hits,
                  onDismiss: this.onStoryDismiss
                }}
              />
            )}
          </Section>
          <Section>
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              changePage={this.makeApiCall}
            />
          </Section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  stories: selectors.selectStories(state)
});

export default connect(
  mapStateToProps,
  { fetchStories: operations.fetchStories }
)(App);
