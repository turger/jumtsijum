import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import './GameSelection.css'
import {addNewGame, getGameData} from './services/firebase'
import {getRandomSong} from './utils/utils'
import rnd from 'randomstring'
import songs from './songs'
import Header from './Header'

const GameSelection = () => {
  const [gameIdInput, setGameIdInput] = useState('')
  const [game, setGame] = useState(null)
  const [findClicked, setFindClicked] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const handleNewGameClick = () => {
    const gameId = rnd.generate(4).toUpperCase()
    localStorage.setItem('gameId', gameId)
    const songId = getRandomSong()
    localStorage.setItem('songId', songId)
    const lyrics = songs[songId].lyrics
    addNewGame(gameId, songId, lyrics)
    history.push(`/${gameId}`)
  }

  return (
    <div className='Game__selection'>
      <Header gameId={game ? game.gameId : ''}/>
      <h2>Valitse peli tai aloita uusi</h2>
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
            <Link to={`/${game.gameId}`} target='_blank'>Pelaamaan!</Link>
            <Link to={`/master/${game.gameId}`} target='_blank'>Game Master</Link>
          </div>
      }
      <button className='Game__new' onClick={() => handleNewGameClick()}>Uusi peli</button>
    </div>
  )

}

export default GameSelection
