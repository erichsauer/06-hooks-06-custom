const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';
let TOTAL;
let characters;

// fetches total characters within an affiliation in order to determine total characters for pagination
const setTotal = async (url) => {
  const totalRes = await fetch(url);
  const totalJson = await totalRes.json();
  return totalJson.length;
};

const fetchFromApi = async ({ id, perPage, currentPage, affiliation }) => {
  if (id) {
    TOTAL = await setTotal(`${URL}?perPage=1000`);
    const res = await fetch(`${URL}/${id}`);
    const { _id, name, gender, eye, hair, weapon, photoUrl } = await res.json();
    return {
      totalCharacters: TOTAL,
      character: { _id, name, gender, eye, hair, weapon, photoUrl },
    };
  }
  if (affiliation !== 'All') {
    TOTAL = await setTotal(`${URL}?affiliation=${affiliation}&perPage=1000`);
    const res = await fetch(
      `${URL}?affiliation=${affiliation}&perPage=${perPage}&page=${currentPage}`
    );
    characters = await res.json();
  } else {
    TOTAL = await setTotal(`${URL}?perPage=1000`);
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
