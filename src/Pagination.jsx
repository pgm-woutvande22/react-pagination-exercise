export function Pagination({ currentPage, pageCount, onPageChanged }) {
  // https://bulma.io/documentation/components/pagination/
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button
        className="pagination-previous"
        disabled={currentPage === 1}
        onClick={() => onPageChanged(currentPage - 1)}
      >
        Previous page
      </button>
      <button
        className="pagination-next"
        disabled={currentPage === pageCount}
        onClick={() => onPageChanged(currentPage + 1)}
      >
        Next page
      </button>
      <ul className="pagination-list">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`pagination-link ${
                page === currentPage ? "is-current" : ""
              }`}
              aria-label={`Goto page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => onPageChanged(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
