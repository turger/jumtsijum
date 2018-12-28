import React, { Component } from 'react'
import cx from 'classnames'

import {openCard, getCardStatusesRef} from './services/firebase'

import songs from './songs.js'


import './Lyrics.css'

class Lyrics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lyrics: null,
      cardStatuses: null,
      openedCard: false
    }
    this._cardStatusesRef = null
  }

  // TODO: red random words
  async componentDidMount() {
    const {songId} = this.props
    this.setState({lyrics: songs[songId].lyrics})
    // set listener to card statuses
    this._cardStatusesRef = getCardStatusesRef(this.props.gameId)
    await this._cardStatusesRef.on('value', (snap) => {
      const cardStatuses = snap.val() ? snap.val() : null
      this.setState({cardStatuses})
    })
  }

  componentWillUnmount() {
    this._cardStatusesRef.off()
  }

  handleWordClick(i) {
    openCard(this.props.gameId, i)
    this.setState({openedCard: true})
  }

  render() {
    const {lyrics, cardStatuses} = this.state
    if(!lyrics || !cardStatuses) return null
    return (
      <div className='Lyrics'>
        {
          Object.values(lyrics).map((word, i) =>
            <div
              key={i}
              className={cx('Lyrics__word', cardStatuses[i].isOpen ? 'Lyrics__word--open': 'Lyrics__word--closed')}
              onClick={() => this.handleWordClick(i)}
            >
              {word}
              {cardStatuses[i].isOpen === false &&
                <div className='Lyrics__number'>
                  {i+1}
                </div>
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default Lyrics
