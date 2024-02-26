import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getAllGames} from './services/firebaseDB'
import Header from './Header'
import './GameSelection.css'

const GameSelection = () => {
  const [allGames, setAllGames] = useState([])

  useEffect(() => {
    const getGames = async () => {
      const games = await getAllGames()
      setAllGames(games)
    }
    getGames()
  }, [])

  return (
    <div className='Game__selection'>
      <Header gameId='' />

      <h2>Biisit</h2>
      <Link className='LinkButton' to={'/songs'}>Lisää ja muokkaa biisejä</Link>

      <h2>Luo uusi peli</h2>
      <Link className='LinkButton' to={'/gameEditor'}>Mene pelinluontiin</Link>

      <h2>Tai valitse olemassaoleva peli</h2>

      <div>
        {allGames && Object.values(allGames)
          .sort((a, b) => Number(a.updated) < Number(b.updated) ? 1 : -1)
          .map(game =>
            <Link key={game.gameId} className='LinkButton'
              to={`/gameEditor/${game.gameId}`}>{game.gameId} - {game.gameName}</Link>
          )}
      </div>
      {(!allGames || allGames.length === 0) && <p>Ei pelejä! Luo uusi peli.</p>}

    </div>
  )

}

export default GameSelection
