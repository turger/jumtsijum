import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import _ from 'lodash'

import { openCard, getCardStatusesRef, getCardStatuses, getCurrentSong, getCurrentSongRef } from './services/firebase'

import './Lyrics.css'

class Lyrics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lyrics: null,
      cardStatuses: null,
      songId: null
    }
    this._cardStatusesRef = null
  }

  async componentDidMount() {
    const { songList, setSongId } = this.props
    const songId = this.state.songId || await getCurrentSong(this.props.gameId)
    this.setState({ lyrics: songList[songId].lyrics })
    // set listener to card statuses
    this._cardStatusesRef = getCardStatusesRef(this.props.gameId)
    await this._cardStatusesRef.on('value', (snap) => {
      const cardStatuses = snap.val() ? snap.val() : null
      this.setState({ cardStatuses })
    })
    this._currentSongRef = getCurrentSongRef(this.props.gameId)
    await this._currentSongRef.on('value', (snap) => {
      const currentSong = snap.val()
      this.setState({ songId: currentSong })
      setSongId(currentSong)
    })
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.songId !== this.state.songId) {
      this.setState({ cardStatuses: null, lyrics: this.props.songList[this.state.songId].lyrics })
      const cardStatuses = await getCardStatuses(this.props.gameId)
      this.setState({ cardStatuses })
    }
  }

  componentWillUnmount() {
    this._cardStatusesRef.off()
  }

  handleWordClick(i) {
    const { buttonsDisabled } = this.props
    if (!buttonsDisabled) openCard(this.props.gameId, i)
  }

  render() {
    const { lyrics, cardStatuses } = this.state
    if (!lyrics || !cardStatuses || !this.props.songList) return null
    return (
      <div className='Lyrics'>
        {
          Object.values(lyrics).map((word, i) => {
            if (!_.get(cardStatuses, i)) return null
            return (
              <div
                key={i}
                onClick={() => this.handleWordClick(i)}
                className='Lyrics__box'
              >
                <div className={cx('Lyrics__word', { 'Lyrics__word--red': cardStatuses[i].isRed })}>
                  {word}
                </div>
                {cardStatuses[i].isOpen === false &&
                  <Fragment>
                    <div className='Lyrics__word Lyrics__word__closed' />
                    <div className='Lyrics__number'>
                      {i + 1}
                    </div>
                  </Fragment>
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

Lyrics.propTypes = {
  gameId: PropTypes.string,
  songList: PropTypes.array,
  buttonsDisabled: PropTypes.bool,
  setSongId: PropTypes.func
}

export default Lyrics
