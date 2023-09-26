import { createContext } from 'react';
import {
  AvatarContextType,
  PokemonContextType,
} from '../utils/types/PokemonTypes';

export const PokemonContext = createContext<PokemonContextType | null>(null);

export const AvatarContext = createContext<AvatarContextType | null>(null);
