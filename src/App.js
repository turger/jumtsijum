import React, { Component } from 'react'
import rnd from 'randomstring'
import Lyrics from './Lyrics'
import Teams from './Teams'
import {addNewGame} from './services/firebase'
import {getRandomSong} from './utils/utils'
import './App.css'

/*
* TODO:
* - add router
* - add game master tool (to different route with gameId)
* - points
* - rule notifications
* - red words
*
* */


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: null,
      song: null
    }
  }

  componentDidMount() {
    let gameId = localStorage.getItem('gameId')
    let songId = localStorage.getItem('songId')
    if (!gameId || !songId) {
      gameId = rnd.generate(4).toUpperCase()
      localStorage.setItem('gameId', gameId)
      songId = getRandomSong()
      localStorage.setItem('songId', songId)
      addNewGame(gameId, songId)
    }
    this.setState({gameId, songId})
  }

  render() {
    const {gameId, songId} = this.state
    if(!gameId && !songId) return null
    return (
      <div className="App">
        <Lyrics
          songId={songId}
        />
        <Teams
          gameId={gameId}
          songId={songId}
        />
      </div>
    )
  }
}

export default App
