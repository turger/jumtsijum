import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Game from './Game'
import GameSelection from './GameSelection'
import GameMaster from './GameMaster'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={GameSelection}/>
      <Route path='/:gameId' component={Game}/>
      <Route path='/master/:gameId' component={GameMaster}/>
    </Switch>
  </main>
)

export default Main