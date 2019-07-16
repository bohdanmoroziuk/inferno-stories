import { Component } from 'inferno';

export default class Pagination extends Component {
  get hasPrev() {
    return this.props.currentPage > 0;
  }

  get hasNext() {
    return this.props.currentPage < this.props.totalPages;
  }

  prevPage = () => {
    const { currentPage, changePage } = this.props;

    this.hasPrev && changePage(currentPage - 1);
  };

  nextPage = () => {
    const { currentPage, changePage } = this.props;

    this.hasNext && changePage(currentPage + 1);
  };

  render() {
    const { currentPage, totalPages } = this.props;

    return (
      <nav aria-label="Page navigation">
        <div className="d-flex align-items-center justify-content-between">
          <p>
            <span className="mb-0 text-muted">Total pages: {totalPages}</span>
            <span className="mb-0 ml-2 text-muted">
              Current page: {currentPage + 1}
            </span>
          </p>
          <ul class="pagination justify-content-end">
            <li class={this.hasPrev ? 'page-item' : 'page-item disabled'}>
              <span class="page-link" onClick={this.prevPage}>
                &laquo;
              </span>
            </li>
            <li class={this.hasNext ? 'page-item' : 'page-item disabled'}>
              <span class="page-link" onClick={this.nextPage}>
                &raquo;
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
