import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import rnd from 'randomstring'

import Lyrics from './Lyrics'
import Teams from './Teams'
import Header from './Header'
import Rules from './Rules'
import Spinner from './Spinner'

import songs from './songs.js'

import {addNewGame, getCurrentSong, getSongArchive, setNewCurrentSong} from './services/firebase'
import {getRandomSong} from './utils/utils'

import './Game.css'

const Game = () => {
  const history = useHistory()

  const [gameId, setGameId] = useState(null)
  const [songId, setSongId] = useState(null)
  const [warning, setWarning] = useState(null)
  const [noMoreSongs, setNoMoreSongs] = useState(false)

  useEffect(() => {
    let currGameId = localStorage.getItem('gameId')
    if (!currGameId) {
      const newGameId = rnd.generate(4).toUpperCase()
      console.info('No game found, created a new one', newGameId)
      localStorage.setItem('gameId', newGameId)
      const newSongId = getRandomSong()
      localStorage.setItem('songId', newSongId)
      const lyrics = songs[newSongId].lyrics
      addNewGame(newGameId, newSongId, lyrics)
      setGameId(newGameId)
      setSongId(newSongId)
    } else {
      async function fetchSong() {
        const currSongId = await getCurrentSong(currGameId)
        setSongId(currSongId)
      }
      fetchSong()
      setGameId(currGameId)
    }
  }, [gameId, songId])

  const setNewSong = async () => {
    const songArchive = await getSongArchive(gameId)
    const songArchiveArray = songArchive ? Array.from(Object.values(songArchive)) : []
    const newSongId = getRandomSong([...songArchiveArray, songId])
    if (!newSongId && newSongId !== 0) {
      setWarning('No more songs available!')
      setNoMoreSongs(true)
    }
    if (newSongId || newSongId === 0) {
      setNewCurrentSong(gameId, songId, newSongId, songs[newSongId].lyrics)
      setSongId(newSongId)
    }
  }

  if(!gameId || !songId) return <Spinner />
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
      <div className="New_song">
        <button
          onClick={() => setNewSong()}
          disabled={noMoreSongs}
        >
          Seuraava laulu
        </button>
      </div>
      <Rules/>
      <button
        onClick={() => history.push(`master/${gameId}`)}
        className="Game_master"
      >
        (Game master)
      </button>
      {warning && <div className='Game__warning'>{warning}</div>}
    </div>
  )
}

export default Game
