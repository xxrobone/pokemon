import { useContext } from 'react';
import styles from './pokemon.module.scss';
import { PokemonContextType,  AvatarContextType } from '../../utils/types/PokemonTypes';
import { AvatarContext, PokemonContext } from '../../context/context';

/* type PokemonProps = {
  pokemon: PokemonType | null;
  setPokemon: (pokemon: PokemonType | null) => void;
}
 */
const Pokemon = () => {
  const { pokemon, setPokemon } = useContext(
    PokemonContext
  ) as PokemonContextType;

  const { setAvatar } = useContext(AvatarContext) as AvatarContextType;

  const API_URL: string = 'https://pokeapi.co/api/v2/';

  const getPokemon = async (url: string): Promise<void> => {
    const id: number = Math.floor(Math.random() * 150);

    const response: any = await fetch(url + 'pokemon/' + id);
    const data: any = await response.json();

    const name: string = data.name;
    const image: string = data.sprites.front_default;
    const types: string[] = data.types.map((item: any) => item.type.name);

    setPokemon({ name, image, types });

    /* 
    setBuddy(pokemon.name)
    */
  };

  const setFavorite = (image: string, e: any) => {
    e.stopPropagation()
    setAvatar({ name: '', image, types: [] });
  }

  return (
    <div>
      {pokemon && (
        <div className={styles.pokemon}>
          <h3 className={styles['pokemon__name']}>{pokemon.name}</h3>
          <div className={styles[`pokemon__image--${pokemon.types[0]}`]}>
            <img
              className={styles['pokemon__image--img']}
              src={pokemon.image}
            />
          </div>
          <div className={styles['pokemon__type']}>
            {pokemon.types.map((item: string, i: number) => (
              <p className={styles[`pokemon__type--${item}`]} key={i}>
                {item}{' '}
              </p>
            ))}
          </div>
          <button className={styles.btn}  onClick={(e) => setFavorite(pokemon.image, e)}>Make favorite</button>
        </div>
      )}
      <div className={styles['pokemon__actions']}>
        <button
          className={styles['pokemon__actions--button']}
          onClick={() => getPokemon(API_URL)}
        >
          Catch a Pokemon
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
