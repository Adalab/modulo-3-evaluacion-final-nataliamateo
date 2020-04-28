import React from 'react';
import FilterByName from './FilterByName';
import '../stylesheets/Filters.scss';
import FilterBySpecies from './FilterBySpecies';
import FilterByGender from './FilterByGender';
import FilterByEpisode from './FilterByEpisode';

const Filters = (props) => {
  // avoy submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} />
      <FilterBySpecies handleFilter={props.handleFilter} />
      <FilterByGender handleFilter={props.handleFilter} />
      <FilterByEpisode handleFilter={props.handleFilter} />
    </form>
  );
};

export default Filters;
