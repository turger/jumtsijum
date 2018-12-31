import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GameSelection.css'
import {addNewGame, getGameData} from './services/firebase'
import {getRandomSong} from './utils/utils'
import rnd from 'randomstring'
import songs from './songs'
import Header from './Header'

class GameSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameIdInput: '',
      game: null,
      findClicked: false,
      loading: false
    }
  }

  async componentDidMount() {
    const gameId = localStorage.getItem('gameId')
    if (gameId) {
      const game = await getGameData(gameId)
      this.setState({gameIdInput: gameId, game, loading: false})
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    const {gameIdInput} = this.state

    if (!gameIdInput) return null

    this.setState({game: null, findClicked: true, loading: true})
    const game = await getGameData(gameIdInput)
    this.setState({game, loading: false})
    if (game) {
      localStorage.setItem('gameId', game.gameId)
      localStorage.setItem('songId', game.currentSong)
    }
  }

  handleNewGameClick = () => {
    const gameId = rnd.generate(4).toUpperCase()
    localStorage.setItem('gameId', gameId)
    const songId = getRandomSong()
    localStorage.setItem('songId', songId)
    const lyrics = songs[songId].lyrics
    addNewGame(gameId, songId, lyrics)
    this.props.history.push(`/${gameId}`)
  }

  render() {
    const {gameIdInput, game, findClicked, loading} = this.state
    console.log(this.state)
    return (
      <div className='Game__selection'>
        <Header gameId={game ? game.gameId : ''}/>
        <h2>Valitse peli tai aloita uusi</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Pelin id
            <input
              type='text'
              value={gameIdInput}
              onChange={(e) => this.setState({gameIdInput: e.target.value.toUpperCase()})}
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
        <button className='Game__new' onClick={() => this.handleNewGameClick()}>Uusi peli</button>
      </div>
    )
  }
}

export default GameSelection
