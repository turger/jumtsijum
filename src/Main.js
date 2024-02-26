import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Game from './Game'
import GameSelection from './GameSelection'
import GameMaster from './GameMaster'
import UpdateGame from './UpdateGame'
import Songs from './Songs'

const Main = () => (
  <main>
    <Router>
      <Routes>
        <Route exact path='/' element={<GameSelection />} />
        <Route exact path='/gameEditor/:gameId?' element={<UpdateGame />} />
        <Route exact path='/songs' element={<Songs />} />
        <Route exact path='/master/:gameId' element={<GameMaster />} />
        <Route exact path='/:gameId' element={<Game />} />
      </Routes>
    </Router>
  </main>
)

export default Main
