import React from 'react';

const Controls = ({
  currentPage,
  perPage,
  totalCharacters,
  affiliation,
  onPerPage,
  onPageChange,
  onAffiliationChange,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button
        onClick={() => onPageChange(-1)}
        disabled={currentPage <= 1}
        aria-label="next page"
      >
        👈🏼
      </button>
      <select
        aria-label="results per page"
        onChange={onPerPage}
        value={perPage}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage >= totalCharacters / perPage}
        aria-label="previous page"
      >
        👉🏼
      </button>
      <select
        aria-label="affiliation"
        onChange={onAffiliationChange}
        value={affiliation}
      >
        <option value="All">All</option>
        <option value="Fire+Nation">Fire Nation</option>
        <option value="Water+Tribe">Water Tribe</option>
        <option value="Earth+Kingdom">Earth Kingdom</option>
      </select>
      Page {currentPage}
    </form>
  );
};
Controls.propTypes = {};

export default Controls;
