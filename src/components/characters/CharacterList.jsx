import React from 'react';
import Character from './Character';

const CharacterList = ({ loading, characters }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <ul>
      {characters?.map((character) => (
        <li key={character.id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
