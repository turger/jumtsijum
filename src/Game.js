import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import rnd from 'randomstring'

import Lyrics from './Lyrics'
import Teams from './Teams'
import Header from './Header'
import Rules from './Rules'
import Spinner from './Spinner'

import { addNewGame, getCurrentSong, getSongListKey } from './services/firebase'
import { getRandomSong, getSongNumber, getSongsLeft, songLists } from './utils/utils'

import './Game.css'

const defaultSongListKey = 'LISTA1'

const Game = () => {
  const [gameId, setGameId] = useState(localStorage.getItem('gameId'))
  const [songListKey, setSongListKey] = useState(null)
  const [songId, setSongId] = useState(null)
  const [songsLeft, setSongsLeft] = useState(0)
  const [songNumber, setSongNumber] = useState(0)

  useEffect(() => {
    let currGameId = localStorage.getItem('gameId')
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
  }, [gameId])

  useEffect(() => {
    async function fetchSongsLeft() {
      setSongsLeft(await getSongsLeft(localStorage.getItem('gameId')))
      setSongNumber(await getSongNumber(localStorage.getItem('gameId')))
    }
    fetchSongsLeft()
  }, [gameId, songId, songListKey])

  if ((!gameId && gameId !== 0) || (!songId && songId !== 0) || !songListKey) return <Spinner />
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
