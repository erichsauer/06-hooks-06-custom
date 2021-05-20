import { json } from 'msw/lib/types/context';

const URL = 'https://xfiles-api.herokuapp.com/api/v1/characters';

const fetchCharacters = async ({ name, pageNumber, perPage, category }) => {
  if (name) {
    res = await fetch(`${URL}/${name}`);
    return await res.json();
  } else {
    const res = await fetch('api url');
    const json = await json();
    return {
      some: 'munge',
    };
  }
};

export default fetchCharacters;
