import React, {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom'
import _ from 'lodash'
import cx from 'classnames'
import {
  addGameMasterViewer,
  getCardStatusesRef,
  openCard,
  getCurrentSongIndexRef,
  getCardStatuses,
  getSongByGameIdAndCurrentSongIndex,
  getSongsLeft,
  setNewSong
} from './services/firebase'

import Header from './Header'
import Teams from './Teams'

import './GameMaster.css'

const GameMaster = (props) => {
  const [cardStatuses, setCardStatuses] = useState(null)
  const [currentSong, setCurrentSong] = useState(null)
  const [songsLeft, setSongsLeft] = useState(0)
  const [gameId, setGameId] = useState()
  const [newSongButtonClicked, setNewSongButtonClicked] = useState(false)
  const cardStatusesRef = useRef(null)
  const currentSongIndexRef = useRef(null)

  const {gameId: gameIdFromUrl} = useParams()

  useEffect(() => {
    if (gameIdFromUrl) {
      setGameId(gameIdFromUrl)
      addGameMasterViewer(gameIdFromUrl)
    }
  }, [gameIdFromUrl])

  useEffect(() => {
    const getSongsAndGameData = async () => {
      setSongsLeft(await getSongsLeft(gameId))
    }
    getSongsAndGameData()

    const setListenersToCardStatuses = async () => {
      cardStatusesRef.current = getCardStatusesRef(gameId)
      await cardStatusesRef.current.on('value', (snap) => {
        const cardStatuses = snap.val() ? snap.val() : null
        setCardStatuses(cardStatuses)
      })
      currentSongIndexRef.current = getCurrentSongIndexRef(gameId)
      await currentSongIndexRef.current.on('value', async (snap) => {
        const currentSongIndex = snap.val()
        const song = await getSongByGameIdAndCurrentSongIndex(gameId, currentSongIndex)
        setCurrentSong(song)
      })
    }
    setListenersToCardStatuses()
  }, [gameId])

  const handleWordClick = (i) => {
    openCard(gameId, i)
  }

  const newSong = async () => {
    setNewSongButtonClicked(true)
    const song = await setNewSong(gameId)
    setCurrentSong(song)
    setCardStatuses(await getCardStatuses(gameId))
    setSongsLeft(await getSongsLeft(gameId))
    setNewSongButtonClicked(false)
  }

  if (!cardStatuses || _.isEmpty(currentSong)) return null

  return (
    <div className='GameMaster'>
      <Header gameId={gameId} />
      <div className='GameMaster__title'>GameMaster</div>
      <div className='GameMaster__lyrics'>
        {
          currentSong.lyrics.map((word, i) => {
            if (!_.get(cardStatuses, i)) return null
            return (
              <div
                key={i}
                className={cx('GameMaster__word', cardStatuses[i].isOpen ? 'GameMaster__word--open' : 'GameMaster__word--closed', {'Lyrics__word--red': cardStatuses[i].isRed})}
                onClick={() => handleWordClick(i)}
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
        {`${currentSong.artist} - ${currentSong.name}`}
      </div>
      {currentSong.question &&
        <div className='GameMaster__question'>
          <div>Kysymys: <b>{currentSong.question}</b></div>
          <div>Vastaus: <b>{currentSong.answer}</b></div>
        </div>
      }
      <Teams
        gameId={gameId}
      />
      <div className="New_song">
        <button
          onClick={() => newSong()}
          disabled={songsLeft === 0 || newSongButtonClicked}
        >
          Seuraava laulu
        </button>
        <div>Lauluja jäljellä {songsLeft} kpl</div>
      </div>
    </div>
  )
}

export default GameMaster
