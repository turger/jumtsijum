import React, { Component } from 'react'
import {addGameMasterViewer} from './services/firebase'

import Header from './Header'

class GameMaster extends Component {
  componentDidMount() {
    addGameMasterViewer(this.props.match.params.gameId, '234')
  }

  render() {
    const {gameId} = this.props.match.params
    return (
      <div className='GameMaster'>
        <Header gameId={gameId}/>
        GameMaster
        GameId {gameId}
      </div>
    )
  }
}

export default GameMaster
