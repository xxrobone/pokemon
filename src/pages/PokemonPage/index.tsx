import React, { FC } from 'react';
import Pokemon from '../../components/Pokemon';



const PokemonPage: FC = () => {
  return (
    <div className='pokemon-container'>
      <Pokemon />
    </div>
  );
};

export default PokemonPage;
