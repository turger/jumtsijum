import React, { Component } from 'react'
import {addGameMasterViewer, getCardStatusesRef, getGameData, openCard} from './services/firebase'

import Header from './Header'

import songs from './songs.js'
import cx from 'classnames'

import './GameMaster.css'

class GameMaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null,
      cardStatuses: null
    }
    this._cardStatusesRef = null
  }

  async componentDidMount() {
    const {gameId} = this.props.match.params
    addGameMasterViewer(gameId)
    const game = await getGameData(gameId)
    this.setState({game})
    // set listener to card statuses
    this._cardStatusesRef = getCardStatusesRef(gameId)
    await this._cardStatusesRef.on('value', (snap) => {
      const cardStatuses = snap.val() ? snap.val() : null
      this.setState({cardStatuses})
    })
  }

  componentWillUnmount() {
    this._cardStatusesRef.off()
  }

  render() {
    const {gameId} = this.props.match.params
    const {game, cardStatuses} = this.state
    console.log(game, cardStatuses)
    if (!game || !cardStatuses) return null
    const lyrics = songs[game.currentSong].lyrics
    console.log(this.state.game)
    return (
      <div className='GameMaster'>
        <Header gameId={gameId}/>
        GameMaster
        GameId {gameId}
        <div className='GameMaster__lyrics'>
          {
            Object.values(lyrics).map((word, i) =>
              <div
                key={i}
                className={cx('GameMaster__word', cardStatuses[i].isOpen ? 'GameMaster__word--open': 'GameMaster__word--closed')}
                onClick={() => this.handleWordClick(i)}
              >
                {word}
                <div className='GameMaster__word__number'>
                  {i+1}
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default GameMaster
