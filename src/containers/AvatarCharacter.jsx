import React from 'react';
import Controls from '../components/app/Controls';
import CharacterList from '../components/characters/CharacterList';
import useAvatarCharacters from '../hooks/avatarCharacters';

const AvatarCharacter = () => {
  const {
    loading,
    characters,
    currentPage,
    perPage,
    totalCharacters,
    affiliation,
    handlePerPage,
    handlePageChange,
    handleAffiliationChange,
  } = useAvatarCharacters();

  return (
    <>
      <Controls
        currentPage={currentPage}
        perPage={perPage}
        totalCharacters={totalCharacters}
        affiliation={affiliation}
        onPerPage={handlePerPage}
        onPageChange={handlePageChange}
        onAffiliationChange={handleAffiliationChange}
      />
      <CharacterList characters={characters} loading={loading} />
    </>
  );
};

export default AvatarCharacter;
