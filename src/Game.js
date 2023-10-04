import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Lyrics from './Lyrics'
import Teams from './Teams'
import Header from './Header'
import Rules from './Rules'
import Spinner from './Spinner'

import './Game.css'

const languages = {
  FI: 'fi',
  EN: 'en'
}

const Game = (props) => {
  const [gameId, setGameId] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState('fi')

  const getLang = () => language === languages.FI ? languages.EN : languages.FI

  useEffect(() => {
    setIsLoading(true)
    const gameIdFromUrl = props.match.params.gameId
    let currGameId = gameIdFromUrl
    if (currGameId) {
      setGameId(currGameId)
    }
    setTimeout(() => { setIsLoading(false) }, 500)
  }, [gameId, props.match.params.gameId])

  if (isLoading) return <Spinner />
  if (!isLoading && ((!gameId && gameId !== 0))) {
    return (
      <div className="Game">
        <p>Peliä ei löytynyt id:llä {gameId}</p>
        <Link to='/'>Takaisin alkuun</Link>
      </div>
    )
  }
  return (
    <div className="Game">
      <Header gameId={gameId} />
      <Lyrics
        gameId={gameId}
        buttonsDisabled={true}
      />
      <Teams
        gameId={gameId}
        buttonsDisabled={true}
      />
      <Rules lang={language} />
      <button onClick={() => setLanguage(getLang())}>{getLang()}</button>
    </div>
  )
}

export default Game
