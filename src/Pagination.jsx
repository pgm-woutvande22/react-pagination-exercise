export function Pagination({ currentPage, pageCount, onPageChanged }) {
  // https://bulma.io/documentation/components/pagination/
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button className="pagination-previous">Previous page</button>
      <button className="pagination-next">Next page</button>
      <ul className="pagination-list">
        <li>
          <button className="pagination-link" aria-label="Goto page 1">
            1
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button className="pagination-link" aria-label="Goto page 45">
            45
          </button>
        </li>
        <li>
          <button
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </button>
        </li>
        <li>
          <button className="pagination-link" aria-label="Goto page 47">
            47
          </button>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <button className="pagination-link" aria-label="Goto page 86">
            86
          </button>
        </li>
      </ul>
    </nav>
  );
}
