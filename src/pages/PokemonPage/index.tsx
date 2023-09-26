import React, { FC } from 'react';
import Pokemon from '../../components/Pokemon';
import { PokemonType } from '../../utils/types/PokemonTypes';

type PokemonPageProps = {
  pokemon: PokemonType | null;
  setPokemon: (pokemon: PokemonType | null) => void;
}

const PokemonPage: FC<PokemonPageProps> = ({pokemon,  setPokemon}: PokemonPageProps) => {
  return (
    <div className='pokemon-container'>
      <Pokemon pokemon={pokemon} setPokemon={setPokemon} />
    </div>
  );
};

export default PokemonPage;
