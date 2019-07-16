import Icon from './Icon';

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const hasPrev = currentPage > 0;

  const hasNext = currentPage < totalPages;

  const prevPage = () => {
    hasPrev && changePage(currentPage - 1);
  };

  const nextPage = () => {
    hasNext && changePage(currentPage + 1);
  };

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
          <li class={hasPrev ? 'page-item' : 'page-item disabled'}>
            <span class="page-link" onClick={prevPage}>
              <Icon name="chevron-left" />
            </span>
          </li>
          <li class={hasNext ? 'page-item' : 'page-item disabled'}>
            <span class="page-link" onClick={nextPage}>
             <Icon name="chevron-right" />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
