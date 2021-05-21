import React from 'react';
import useAvatarCharacters from '../../hooks/avatarCharacters';

const Controls = () => {
  const {
    currentPage,
    perPage,
    affiliation,
    totalCharacters,
    handleAffiliationChange,
    handlePageChange,
    handlePerPage,
  } = useAvatarCharacters();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => handlePageChange(-1)} disabled={currentPage <= 1}>
        👈🏼
      </button>
      <select name="results per page" onChange={handlePerPage} value={perPage}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage >= totalCharacters / perPage}
      >
        👉🏼
      </button>
      <select
        name="affiliations"
        onChange={handleAffiliationChange}
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
