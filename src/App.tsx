import { useState } from 'react'
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'
import PokemonPage from './pages/PokemonPage'
import FileNotFound from './pages/fileNotFound'
import { PokemonType } from './utils/types/PokemonTypes'


function App() {

  const [pokemon, setPokemon] = useState<PokemonType | null>(null)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
          <Route path='/pokemon' element={<PokemonPage pokemon={pokemon} setPokemon={setPokemon}  />} />
        <Route path='/*' element={<FileNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
