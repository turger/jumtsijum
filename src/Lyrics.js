import React, { Component } from 'react'
import cx from 'classnames'
import songs from './songs.js'
import './Lyrics.css'

class Lyrics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lyrics: {}
    }
  }

  // TODO: red random words
  componentDidMount() {
    console.log(this.props)
    const {songId} = this.props
    console.log(songs, songId, songs.songId)
    this.setState({lyrics: Object.values(songs[songId].lyrics).map(word => ({word: word, status: 'closed'}))})
  }

  handleWordClick(i) {
    const lyrics = this.state.lyrics
    lyrics[i].status = 'open'
    this.setState({lyrics})
  }

  render() {
    const {lyrics} = this.state
    if(!lyrics) return null
    console.log(lyrics)
    return (
      <div className='Lyrics'>
        {
          Object.values(lyrics).map((value, i) =>
            <div
              key={i}
              className={cx('Lyrics__word', `Lyrics__word--${value.status}`)}
              onClick={() => this.handleWordClick(i)}
            >
              {value.word}
              {value.status === 'closed' &&
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
