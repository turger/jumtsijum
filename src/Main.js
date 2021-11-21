import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Game from './Game'
import GameSelection from './GameSelection'
import GameMaster from './GameMaster'
import Settings from './Settings'

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route path='/settings' component={Settings}/>
        <Route exact path='/' component={GameSelection}/>
        <Route exact path='/:gameId' component={Game}/>
        <Route exact path='/master/:gameId' component={GameMaster}/>
      </Switch>
    </Router>
  </main>
)

export default Main
