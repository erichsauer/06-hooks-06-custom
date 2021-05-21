const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

// current total avatar characters - it's not supplied by the API so may need to be updated!
const TOTAL = 497;

const fetchFromApi = async ({ id, perPage, currentPage, affiliation }) => {
  let characters;
  if (id) {
    const res = await fetch(`${URL}/${id}`);
    const { _id, name, gender, eye, hair, weapon, photoUrl } = await res.json();
    return {
      totalCharacters: TOTAL,
      character: { _id, name, gender, eye, hair, weapon, photoUrl },
    };
  }
  if (affiliation !== 'All') {
    const res = await fetch(
      `${URL}?affiliation=${affiliation}&perPage=${perPage}&page=${currentPage}`
    );
    characters = await res.json();
  } else {
    const res = await fetch(`${URL}?perPage=${perPage}&page=${currentPage}`);
    characters = await res.json();
  }

  return {
    totalCharacters: TOTAL,
    characters: characters.map(({ _id, name, affiliation, photoUrl }) => ({
      id: _id,
      name,
      affiliation,
      photoUrl,
    })),
  };
};

export default fetchFromApi;
