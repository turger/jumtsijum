import React, {Fragment, useEffect, useRef, useState} from 'react'
import {onValue} from 'firebase/database'
import PropTypes from 'prop-types'
import cx from 'classnames'
import _ from 'lodash'
import {openCard, getCardStatusesRef, getCardStatuses, getCurrentSongIndex, getCurrentSongIndexRef, getSongByGameIdAndCurrentSongIndex} from './services/firebaseDB'
import './Lyrics.css'

const Lyrics = ({gameId, buttonsDisabled}) => {
  const [lyrics, setLyrics] = useState(null)
  const [cardStatuses, setCardStatuses] = useState(null)
  const [currentSongIndex, setCurrentSongIndex] = useState(null)
  const cardStatusesRef = useRef(null)
  const currentSongIndexRef = useRef(null)

  useEffect(() => {
    const getGameAndSong = async () => {
      const songIndex = currentSongIndex || await getCurrentSongIndex(gameId)
      const song = await getSongByGameIdAndCurrentSongIndex(gameId, songIndex)
      setLyrics(song.lyrics)
    }
    getGameAndSong()
  }, [currentSongIndex, gameId])

  useEffect(() => {
    const setListenersToCardStatuses = async () => {
      cardStatusesRef.current = getCardStatusesRef(gameId)
      await onValue(cardStatusesRef.current, (snap) => {
        const cardStatuses = snap.val() ? snap.val() : null
        setCardStatuses(cardStatuses)
      })
      currentSongIndexRef.current = getCurrentSongIndexRef(gameId)
      await onValue(currentSongIndexRef.current, async (snap) => {
        const currentSongIndex = snap.val()
        setCurrentSongIndex(currentSongIndex)
        const song = await getSongByGameIdAndCurrentSongIndex(gameId, currentSongIndex)
        setLyrics(song.lyrics)
      })
    }
    setListenersToCardStatuses()
  }, [gameId])

  useEffect(() => {
    const setCards = async () => {
      setCardStatuses(await getCardStatuses(gameId))
    }
    setCards()
  }, [currentSongIndex, gameId])

  const handleWordClick = (i) => {
    if (!buttonsDisabled) openCard(gameId, i)
  }

  if (!lyrics || !cardStatuses) return null
  return (
    <div className='Lyrics'>
      {
        Object.values(lyrics).map((word, i) => {
          if (!_.get(cardStatuses, i)) return null
          return (
            <div
              key={i}
              onClick={() => handleWordClick(i)}
              className='Lyrics__box'
            >
              <div className={cx('Lyrics__word', {'Lyrics__word--red': cardStatuses[i].isRed})}>
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

Lyrics.propTypes = {
  gameId: PropTypes.string,
  buttonsDisabled: PropTypes.bool,
}

export default Lyrics
