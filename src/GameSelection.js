import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import {Link, useHistory} from 'react-router-dom'
import './GameSelection.css'
import {addNewGame, getGameData} from './services/firebase'
import {getRandomSong, songLists} from './utils/utils'
import rnd from 'randomstring'
import Header from './Header'

const GameSelection = () => {
  const [gameIdInput, setGameIdInput] = useState('')
  const [game, setGame] = useState(null)
  const [findClicked, setFindClicked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedSongListKey, setSelectedSongListKey] = useState('KLASSIKOT')

  const history = useHistory()

  useEffect(() => {
    const gameId = localStorage.getItem('gameId')
    if (gameId) {
      async function getGame() {
        const game = await getGameData(gameId)
        setGameIdInput(gameId)
        setGame(game)
        setLoading(false)
      }
      getGame()
    }
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!gameIdInput) return null
    setGame(null)
    setFindClicked(true)
    setLoading(true)
    const game = await getGameData(gameIdInput)
    setGame(game)
    setLoading(false)
    if (game) {
      localStorage.setItem('gameId', game.gameId)
      localStorage.setItem('songId', game.currentSong)
    }
  }

  const selectSongList = (songListKey) => {
    const selected = songListKey === selectedSongListKey
    if (selected) return <div className='Game__selectedSong'>Valittu!</div>
    return <button className='Game__selectSongBtn' onClick={() => setSelectedSongListKey(songListKey)}>Valitse</button>
  }

  const handleNewGameClick = () => {
    const songList = _.get(songLists, selectedSongListKey)
    const gameId = rnd.generate(4).toUpperCase()
    localStorage.setItem('gameId', gameId)
    const songId = getRandomSong([], songList)
    localStorage.setItem('songId', songId)
    const lyrics = songList[songId].lyrics
    addNewGame(gameId, songId, lyrics, selectedSongListKey)
    history.push(`/${gameId}`)
  }

  return (
    <div className='Game__selection'>
      <Header gameId={game ? game.gameId : ''}/>
      <h2>Valitse olemassaoleva peli</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Pelin id
          <input
            type='text'
            value={gameIdInput}
            onChange={(e) => setGameIdInput(e.target.value.toUpperCase())}
          />
        </label>
        <input type='submit' value='Hae' disabled={!gameIdInput}/>
      </form>
      {!game && findClicked && !loading && <div className='Game__notFound'>Peliä ei löytynyt</div>}
      {
        game &&
          <div className='Game__buttons'>
            <Link to={`/${game.gameId}`}>Pelaamaan!</Link>
            <Link to={`/master/${game.gameId}`}>Game Master</Link>
          </div>
      }
      <h2>Tai aloita uusi peli</h2>
      <div className="Game__selectSong">
        <div>Klassikot {selectSongList('KLASSIKOT')}</div>
        <div>90-00-luvut {selectSongList('90-00')}</div>
        <div>Nopea bilelista {selectSongList('BILEET')}</div>
        <div>In English {selectSongList('ENG')}</div>
        <div>Nykyaikaisempaa {selectSongList('NYKY')}</div>
      </div>
      <button className='Game__new' onClick={() => handleNewGameClick()}>Uusi peli</button>
    </div>
  )

}

export default GameSelection
