import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Game from './Game'
import GameSelection from './GameSelection'
import GameMaster from './GameMaster'
import UpdateGame from './UpdateGame'
import Songs from './Songs'

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={GameSelection} />
        <Route exact path='/gameEditor/:gameId?' component={UpdateGame} />
        <Route exact path='/songs' component={Songs} />
        <Route exact path='/master/:gameId' component={GameMaster} />
        <Route exact path='/:gameId' component={Game} />
      </Switch>
    </Router>
  </main>
)

export default Main
