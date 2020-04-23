const getDatafromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) =>
      data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          image: character.image,
          episode: character.episode.length,
        };
      })
    );
};

export default getDatafromApi;
