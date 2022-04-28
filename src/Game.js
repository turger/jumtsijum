import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import rnd from 'randomstring'

import Lyrics from './Lyrics'
import Teams from './Teams'
import Header from './Header'
import Rules from './Rules'
import Spinner from './Spinner'

import {addNewGame, getCurrentSong, getSongArchive, getSongListKey, setNewCurrentSong} from './services/firebase'
import {getRandomSong, songLists} from './utils/utils'

import './Game.css'

const defaultSongListKey = 'LISTA1'

const Game = () => {
  const [gameId, setGameId] = useState(localStorage.getItem('gameId'))
  const [songId, setSongId] = useState(null)
  const [songListKey, setSongListKey] = useState(null)
  const [songsLeft, setSongsLeft] = useState(null)

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
      setSongsLeft(songList.length)
    } else {
      async function fetchSong() {
        const currSongId = await getCurrentSong(currGameId)
        const songListKey = await getSongListKey(currGameId)
        setSongId(currSongId)
        setSongListKey(songListKey)
        const songArchive = await getSongArchive(currGameId)
        setSongsLeft(_.size(_.get(songLists, songListKey)) - _.size(songArchive) -1)
      }
      fetchSong()
      setGameId(currGameId)
    }
  }, [gameId])

  const setNewSong = async () => {
    const songList = _.get(songLists, songListKey)
    const songArchive = await getSongArchive(gameId)
    const songArchiveArray = songArchive ? Array.from(Object.values(songArchive)) : []
    const newSongId = getRandomSong([...songArchiveArray, songId], songList)
    if (newSongId || newSongId === 0) {
      setNewCurrentSong(gameId, songId, newSongId, songList[newSongId].lyrics)
      setSongId(newSongId)
      setSongsLeft(songsLeft-1)
    }
  }

  if((!gameId && gameId !== 0) || (!songId && songId !== 0) || !songListKey) return <Spinner />
  const songList = _.get(songLists, songListKey)
  return (
    <div className="Game">
      <Header gameId={gameId}/>
      <Lyrics
        gameId={gameId}
        songId={songId}
        songList={songList}
      />
      <Teams
        gameId={gameId}
      />
      <div className="New_song">
        <button
          onClick={() => setNewSong()}
          disabled={songsLeft === 0}
        >
          Seuraava laulu
        </button>
      </div>
      <div className='Game__songs'>
        <div>Lauluja jäljellä {songsLeft} kpl</div>
      </div>
      <Rules/>
      <Link className="Game_master" to={`master/${gameId}`} target='_blank'>(Game master)</Link>
    </div>
  )
}

export default Game
