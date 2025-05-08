export function Pagination({ currentPage, pageCount, onPageChanged }) {
  const renderPages = () => {
    const pages = [];

    if (pageCount <= 6) {
      // Show all pages if pageCount is 6 or less
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 3) {
      // Beginning pages
      pages.push(1, 2, 3, 4, "...", pageCount);
    } else if (currentPage >= pageCount - 2) {
      // Ending pages
      pages.push(
        1,
        "...",
        pageCount - 3,
        pageCount - 2,
        pageCount - 1,
        pageCount
      );
    } else {
      // Middle pages
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        pageCount
      );
    }

    return pages;
  };

  const pages = renderPages();

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
        {pages.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="pagination-ellipsis">&hellip;</span>
            ) : (
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
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
