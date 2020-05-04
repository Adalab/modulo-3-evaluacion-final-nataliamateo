import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import getDatafromApi from '../services/api.js';
import CharacterDetailPj from './CharacterDetailPj.js';
import Filters from './Filters';
import CharacterNotFound from './CharacterNotFound.js';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [episodeFilter, setEpisodeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Call Api
  useEffect(() => {
    getDatafromApi().then((data) => setCharacters(data));
  }, []);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'episode') {
      setEpisodeFilter(data.value);
    } else if (data.key === 'status') {
      setStatusFilter(data.value);
    }
  };

  //render data

  const filterCharacter = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      if (speciesFilter === 'all') {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    })
    .filter((character) => {
      return genderFilter === 'all' ? true : character.gender === genderFilter;
    })
    .filter((character) => {
      if (episodeFilter.length === 0) {
        return true;
      } else {
        console.log(character.episode, episodeFilter);
        return character.episode.toString() === episodeFilter;
        // se puede hacer parseando pero hay que poner un número base entre 2 y 36 para no tener fallos de navegador
        // return character.episode === parseInt(episodeFilter, 10);
      }
    })
    .filter((character) => {
      return statusFilter === 'all' ? true : character.status === statusFilter;
    });

  // render card detail
  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => character.id === characterId);
    if (foundCharacter !== undefined) {
      return <CharacterDetailPj character={foundCharacter} />;
    } else {
      return <CharacterNotFound />;
    }
  };

  return (
    <div className='app'>
      <Header handleFilter={handleFilter} />
      <main>
        <Switch>
          <Route exact path='/'>
            <Filters className='header__form' handleFilter={handleFilter} nameFilter={nameFilter} />
            <CharacterList characters={filterCharacter} />
          </Route>
          <Route path='/:id' render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
