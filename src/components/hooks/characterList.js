import React, { useState, useEffect } from 'react';
import fetchCharacters from '../../services/xfilesApi';

const useCharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const characters = await fetchCharacters({ pageNumber, perPage });
      setCharacters(characters);
      setLoading(false);
    })();
  }, [pageNumber, perPage]);

  const handlePageChange = (next) => {
    if (next) setPageNumber((n) => n + 1);
    else setPageNumber((n) => n - 1);
  };

  const handlePerPage = ({ target: { value } }) => {
    setPerPage(value);
  };

  return {
    loading,
    characters,
    pageNumber,
    perPage,
    handlePageChange,
    handlePerPage,
  };
};

export default useCharacterList;
