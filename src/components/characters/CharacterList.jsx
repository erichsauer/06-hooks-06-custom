import React from 'react';
import useAvatarCharacters from '../../hooks/avatarCharacters';
import Character from './Character';

const CharacterList = () => {
  const { loading, characters } = useAvatarCharacters();

  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
