import React, { Component } from 'react'
import rnd from 'randomstring'

import Lyrics from './Lyrics'
import Teams from './Teams'
import Header from './Header'
import Rules from './Rules'

import songs from './songs.js'

import {addNewGame, setNewCurrentSong, getSongArchive, getCurrentSong} from './services/firebase'
import {getRandomSong} from './utils/utils'

import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: null,
      songId: null,
      warning: null,
      noMoreSongs: false
    }
  }

  async componentDidMount() {
    let gameId = localStorage.getItem('gameId')
    let songId = null
    if (!gameId) {
      gameId = rnd.generate(4).toUpperCase()
      console.warn('No game found, created a new one', gameId)
      localStorage.setItem('gameId', gameId)
      songId = getRandomSong()
      localStorage.setItem('songId', songId)
      const lyrics = songs[songId].lyrics
      addNewGame(gameId, songId, lyrics)
    } else {
      songId = await getCurrentSong(gameId)
    }
    this.setState({gameId, songId})
  }

  async setNewSong() {
    const {gameId, songId} = this.state
    const songArchive = await getSongArchive(gameId)
    const songArchiveArray = songArchive ? Array.from(Object.values(songArchive)) : []
    const newSongId = getRandomSong([...songArchiveArray, songId])
    if (!newSongId && newSongId !== 0) this.setState({warning: 'No more songs available!', noMoreSongs: true})
    if (newSongId || newSongId === 0) {
      setNewCurrentSong(gameId, songId, newSongId, songs[newSongId].lyrics)
      this.setState({songId: newSongId})
    }
  }

  render() {
    const {gameId, songId, warning, noMoreSongs} = this.state
    if(!gameId && !songId) return null

    return (
      <div className="Game">
        <Header gameId={gameId}/>
        <Lyrics
          gameId={gameId}
          songId={songId}
        />
        <Teams
          gameId={gameId}
          songId={songId}
        />
        <Rules/>
        <button
          onClick={() => this.setNewSong()}
          disabled={noMoreSongs}
        >
          Uusi laulu
        </button>
        {warning && <div className='Game__warning'>{warning}</div>}
      </div>
    )
  }
}

export default Game
