import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GameSelection.css'
import {addNewGame, getGameData} from './services/firebase'
import {getRandomSong} from './utils/utils'
import rnd from 'randomstring'
import songs from './songs'

class GameSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: '',
      game: null,
      findClicked: false,
      loading: false
    }
  }

  componentDidMount() {
    const gameId = localStorage.getItem('gameId')
    if (gameId) this.setState({gameId})
  }

  async handleSubmit(e) {
    e.preventDefault()
    this.setState({game: null, findClicked: true, loading: true})
    const game = await getGameData(this.state.gameId)
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
    const {gameId, game, findClicked, loading} = this.state
    return (
      <div className='game__selection'>
        Valitse peli tai aloita uusi
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Game id:
            <input
              type='text'
              value={this.state.gameId}
              onChange={(e) => this.setState({gameId: e.target.value.toUpperCase()})}
            />
          </label>
          <input type='submit' value='Hae'/>
        </form>
        {!game && findClicked && !loading && <div>No game found</div>}
        {
          game &&
            <div className='Game__buttons'>
              <Link to={`/${gameId}`} target='_blank'>Go to game</Link>
              <Link to={`/master/${gameId}`} target='_blank'>Game Master</Link>
            </div>
        }
        <button onClick={() => this.handleNewGameClick()}>Uusi peli</button>
      </div>
    )
  }
}

export default GameSelection
