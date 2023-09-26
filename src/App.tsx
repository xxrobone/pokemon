import { useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import FileNotFound from './pages/fileNotFound';
import { PokemonType } from './utils/types/PokemonTypes';
import { AvatarContext, PokemonContext } from './context/context';
import Contact from './pages/Contact';

function App() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [avatar, setAvatar] = useState<PokemonType | null>(null);

  /* 
  teachers solution
  const [buddy, setBuddy ] = useState<string>('../public/pokemon.png');
  */

  return (
    <>
      <PokemonContext.Provider value={{ pokemon, setPokemon }}>
        <AvatarContext.Provider value={{ avatar, setAvatar }}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/*' element={<FileNotFound />} />
            </Route>
          </Routes>
        </AvatarContext.Provider>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
