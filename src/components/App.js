import { Component } from 'inferno';

import Header from './layout/Header';
import Button from './shared/Button';
import Search from './forms/Search';
import Section from './layout/Section';
import NewsTable from './NewsTable';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  state = {
    list,
    searchTerm: ''
  };

  renderTableRow = listItem => {
    const handleClick = () => this.dismissListItem(listItem.objectID);

    return (
      <tr class="news-item" key={listItem.objectID}>
        <td className="p-3">
          <a href={listItem.url}>{listItem.title}</a>
        </td>
        <td className="p-3">{listItem.author}</td>
        <td className="p-3">{listItem.num_comments}</td>
        <td className="p-3">{listItem.points}</td>
        <td>
          <Button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={handleClick}
          >
            Dismiss
          </Button>
        </td>
      </tr>
    );
  };

  changeSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  dismissListItem = listItemId => {
    const isNotId = listItem => listItem.objectID !== listItemId;

    const updatedList = this.state.list.filter(isNotId);

    this.setState({
      list: updatedList
    });
  };

  filterList = () => {
    const { list, searchTerm } = this.state;

    return list.filter(listItem =>
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
            <NewsTable
              {...{
                news,
                hideNews: this.dismissListItem
              }}
            />
          </Section>
        </div>
      </main>
    );
  }
}

export default App;
