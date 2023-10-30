import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

import {getGameMastersOnlineRef} from './services/firebase'

import './Header.css'

const Header = ({gameId}) => {
  const [onlineCount, setOnlineCount] = useState(null)
  const gameMastersOnlineRef = useRef(null)

  useEffect(() => {
    const setListenerToGameMasters = async () => {
      gameMastersOnlineRef.current = getGameMastersOnlineRef(gameId)
      await gameMastersOnlineRef.current.on('value', (snap) => {
        const count = snap.val() ? Object.keys(snap.val()).length : 0
        setOnlineCount(count)
      })
    }
    setListenerToGameMasters()
  }, [gameId]);

  return (
    <div className='Header'>
      <div className='Header__title'>Bumtsibum</div>
      <div className='Header__gameId'>{gameId || ''}</div>
      {
        onlineCount > 1 &&
        <div className='Header__warning'>Koittaako joku huijata? {onlineCount} silmäparia kurkkii game
          masterin sivua!</div>
      }
    </div>
  )
}

Header.propTypes = {
  gameId: PropTypes.string
}

export default Header
