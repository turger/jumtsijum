import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import {
  addGameMasterViewer,
  getCardStatusesRef,
  openCard,
  getCurrentSongRef,
  getCardStatuses, getSongListKey
} from './services/firebase'
import { songLists } from './utils/utils'

import Header from './Header'
import Teams from './Teams'

import './GameMaster.css'

class GameMaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardStatuses: null,
      currentSong: null,
      selectedSongListKey: null
    }
    this._cardStatusesRef = null
    this._currentSongRef = null
  }

  async componentDidMount() {
    const { gameId } = this.props.match.params
    const songListKey = await getSongListKey(gameId)
    this.setState({ selectedSongListKey: songListKey })
    addGameMasterViewer(gameId)
    // set listener to card statuses
    this._cardStatusesRef = getCardStatusesRef(gameId)
    await this._cardStatusesRef.on('value', (snap) => {
      const cardStatuses = snap.val() ? snap.val() : null
      this.setState({ cardStatuses })
    })
    this._currentSongRef = getCurrentSongRef(gameId)
    await this._currentSongRef.on('value', (snap) => {
      const currentSong = snap.val()
      this.setState({ currentSong })
    })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.currentSong !== this.props.currentSong) {
      const songList = _.get(songLists, this.state.selectedSongListKey)
      this.setState({ cardStatuses: null, lyrics: songList[this.props.songId].lyrics })
      const cardStatuses = await getCardStatuses(this.props.gameId)
      this.setState({ cardStatuses })
    }
  }

  componentWillUnmount() {
    this._cardStatusesRef.off()
    this._currentSongRef.off()
  }

  handleWordClick(i) {
    const { gameId } = this.props.match.params
    openCard(gameId, i)
  }

  render() {
    const { gameId } = this.props.match.params
    const { cardStatuses, currentSong, selectedSongListKey } = this.state
    if (!cardStatuses || currentSong === null) return null
    const songList = _.get(songLists, selectedSongListKey)
    const lyrics = songList[currentSong].lyrics
    return (
      <div className='GameMaster'>
        <Header gameId={gameId} />
        <div className='GameMaster__title'>GameMaster</div>
        <div className='GameMaster__lyrics'>
          {
            Object.values(lyrics).map((word, i) => {
              if (!_.get(cardStatuses, i)) return null
              return (
                <div
                  key={i}
                  className={cx('GameMaster__word', cardStatuses[i].isOpen ? 'GameMaster__word--open' : 'GameMaster__word--closed', { 'Lyrics__word--red': cardStatuses[i].isRed })}
                  onClick={() => this.handleWordClick(i)}
                >
                  {word}
                  <div className='GameMaster__word__number'>
                    {i + 1}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='GameMaster__answer'>
          {`${songList[currentSong].artist} - ${songList[currentSong].song}`}
        </div>
        {songList[currentSong].question &&
          <div className='GameMaster__question'>
            <div>Kysymys: <b>{songList[currentSong].question}</b></div>
            <div>Vastaus: <b>{songList[currentSong].answer}</b></div>
          </div>
        }
        <Teams
          gameId={gameId}
        />
      </div >
    )
  }
}

export default GameMaster
