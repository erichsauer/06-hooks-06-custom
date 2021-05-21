import React, { useState, useEffect } from 'react';
import fetchFromApi from '../services/avatarApi';

const useAvatarCharacters = () => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [affiliation, setAffiliation] = useState('All');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { totalCharacters, characters } = await fetchFromApi({
        perPage,
        currentPage,
        affiliation,
      });
      setCharacters(characters);
      setTotalCharacters(totalCharacters);
      setLoading(false);
    })();
  }, [currentPage, perPage, affiliation]);

  const handleAffiliationChange = ({ target: { value } }) => {
    setAffiliation(value);
  };

  const handlePageChange = (n) => {
    setCurrentPage((prevState) => prevState + n);
  };

  const handlePerPage = ({ target: { value } }) => {
    setPerPage(value);
    setCurrentPage(1);
  };
  console.log(characters);
  return {
    loading,
    characters,
    currentPage,
    perPage,
    affiliation,
    totalCharacters,
    handleAffiliationChange,
    handlePageChange,
    handlePerPage,
  };
};
export default useAvatarCharacters;
