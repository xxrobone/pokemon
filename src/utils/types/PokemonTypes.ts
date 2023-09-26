export type PokemonType = {
    name: string,
    image: string,
    types: string[]
}

export type PokemonContextType = {
    pokemon: PokemonType | null;
    setPokemon: (pokemon: PokemonType | null) => void;
}


export type AvatarContextType = {
    avatar: PokemonType | null;
    setAvatar: (avatar: PokemonType | null) => void;
}