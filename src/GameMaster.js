import React, { Component } from 'react'
import _ from 'lodash'
import {
  addGameMasterViewer,
  getCardStatusesRef,
  openCard,
  getCurrentSongRef,
  getCardStatuses
} from './services/firebase'

import Header from './Header'

import songs from './songs.js'
import cx from 'classnames'

import './GameMaster.css'

class GameMaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardStatuses: null,
      currentSong: null
    }
    this._cardStatusesRef = null
    this._currentSongRef = null
  }

  async componentDidMount() {
    const {gameId} = this.props.match.params
    addGameMasterViewer(gameId)
    // set listener to card statuses
    this._cardStatusesRef = getCardStatusesRef(gameId)
    await this._cardStatusesRef.on('value', (snap) => {
      const cardStatuses = snap.val() ? snap.val() : null
      this.setState({cardStatuses})
    })
    this._currentSongRef = getCurrentSongRef(gameId)
    await this._currentSongRef.on('value', (snap) => {
      const currentSong = snap.val()
      this.setState({currentSong})
    })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.currentSong !== this.props.currentSong) {
      this.setState({cardStatuses: null, lyrics: songs[this.props.songId].lyrics})
      const cardStatuses = await getCardStatuses(this.props.gameId)
      this.setState({cardStatuses})
    }
  }

  componentWillUnmount() {
    this._cardStatusesRef.off()
    this._currentSongRef.off()
  }

  handleWordClick(i) {
    const {gameId} = this.props.match.params
    openCard(gameId, i)
  }

  render() {
    const {gameId} = this.props.match.params
    const {cardStatuses, currentSong} = this.state
    if (!cardStatuses || currentSong === null) return null
    const lyrics = songs[currentSong].lyrics
    return (
      <div className='GameMaster'>
        <Header gameId={gameId}/>
        <div className='GameMaster__title'>GameMaster</div>
        <div className='GameMaster__lyrics'>
          {
            Object.values(lyrics).map((word, i) => {
              if (!_.get(cardStatuses, i)) return null
              return(
                <div
                  key={i}
                  className={cx('GameMaster__word', cardStatuses[i].isOpen ? 'GameMaster__word--open': 'GameMaster__word--closed', {'Lyrics__word--red': cardStatuses[i].isRed})}
                  onClick={() => this.handleWordClick(i)}
                >
                  {word}
                  <div className='GameMaster__word__number'>
                    {i+1}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='GameMaster__answer'>
          {`${songs[currentSong].artist} - ${songs[currentSong].song}`}
        </div>
      </div>
    )
  }
}

export default GameMaster
