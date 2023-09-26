import React, { FC } from 'react';
import Pokemon from '../../components/Pokemon';

// styles
import './PokemonPage.scss'



const PokemonPage: FC = () => {
  return (
    <div className='pokemonpage'>
      <Pokemon />
    </div>
  );
};

export default PokemonPage;
