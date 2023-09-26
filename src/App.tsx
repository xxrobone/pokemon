import { useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import PokemonPage from './pages/PokemonPage';
import FileNotFound from './pages/fileNotFound';
import { PokemonType } from './utils/types/PokemonTypes';
import { AvatarContext, PokemonContext } from './context/context';

function App() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [avatar, setAvatar] = useState<PokemonType | null>(null);

  return (
    <>
      <PokemonContext.Provider value={{ pokemon, setPokemon }}>
        <AvatarContext.Provider value={{ avatar, setAvatar }}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/pokemon' element={<PokemonPage />} />
              <Route path='/*' element={<FileNotFound />} />
            </Route>
          </Routes>
        </AvatarContext.Provider>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
