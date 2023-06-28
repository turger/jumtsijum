import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import rnd from 'randomstring'
import { Link } from 'react-router-dom'

import Lyrics from './Lyrics'
import Teams from './Teams'
import Header from './Header'
import Rules from './Rules'
import Spinner from './Spinner'

import { addNewGame, getCurrentSong, getSongListKey } from './services/firebase'
import { getRandomSong, getSongNumber, getSongsLeft, songLists } from './utils/utils'

import './Game.css'

const defaultSongListKey = 'LISTA1'

const Game = (props) => {
  const [gameId, setGameId] = useState(localStorage.getItem('gameId'))
  const [songListKey, setSongListKey] = useState(null)
  const [songId, setSongId] = useState(null)
  const [songsLeft, setSongsLeft] = useState(0)
  const [songNumber, setSongNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const gameIdFromUrl = props.match.params.gameId
    const gameIdFromLocalStorage = localStorage.getItem('gameId')
    let currGameId = gameIdFromUrl ? gameIdFromUrl : gameIdFromLocalStorage
    if (!currGameId) {
      const songList = _.get(songLists, defaultSongListKey)
      const newGameId = rnd.generate(4).toUpperCase()
      console.info('No game found, created a new one', newGameId)
      localStorage.setItem('gameId', newGameId)
      const newSongId = getRandomSong([], songList)
      localStorage.setItem('songId', newSongId)
      const lyrics = songList[newSongId].lyrics
      addNewGame(newGameId, newSongId, lyrics, defaultSongListKey)
      setGameId(newGameId)
      setSongId(newSongId)
      setSongListKey(defaultSongListKey)
    } else {
      async function fetchSong() {
        const currSongId = await getCurrentSong(currGameId)
        const songListKey = await getSongListKey(currGameId)
        setSongId(currSongId)
        setSongListKey(songListKey)
      }
      fetchSong()
      setGameId(currGameId)
    }
    setTimeout(() => { setIsLoading(false) }, 1000)
  }, [gameId, props.match.params.gameId])

  useEffect(() => {
    async function fetchSongsLeft() {
      setSongsLeft(await getSongsLeft(localStorage.getItem('gameId')))
      setSongNumber(await getSongNumber(localStorage.getItem('gameId')))
    }
    fetchSongsLeft()
  }, [gameId, songId, songListKey])

  if (isLoading) return <Spinner />
  if (!isLoading && (!gameId && gameId !== 0) || (!songId && songId !== 0) || !songListKey) {
    return (
      <div className="Game">
        {gameId && <p>Peliä ei löytynyt id:llä {gameId}</p>}
        {songId && <p>Laulua ei löytynyt id:llä {songId}</p>}
        <Link to='/'>Takaisin alkuun</Link>
      </div>
    )
  }
  const songList = _.get(songLists, songListKey)
  return (
    <div className="Game">
      <Header gameId={gameId} />
      <Lyrics
        gameId={gameId}
        songList={songList}
        buttonsDisabled={true}
        setSongId={setSongId}
      />
      <Teams
        gameId={gameId}
        buttonsDisabled={true}
      />
      <div className='Game__songs'>
        <div>Laulu numero {songNumber} - jäljellä {songsLeft} kpl</div>
      </div>
      <Rules lang={songListKey === 'ENG' ? 'en' : 'fi'} />
    </div>
  )
}

export default Game
