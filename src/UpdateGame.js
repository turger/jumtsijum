import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import cx from 'classnames'
import rnd from 'randomstring'
import {FaTrashAlt} from 'react-icons/fa'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {
  getSongs,
  getSong,
  updateGame,
  getOneGame,
  resetGame,
  getGameMastersOnlineCount
} from './services/firebaseDB'
import {getRandomSong, sortByArtistAndSongName} from './utils/utils'
import Header from './Header'
import './UpdateGame.css'

const UpdateGame = (props) => {
  const [allSongs, setAllSongs] = useState({})
  const [originalSelectedSongIds, setOriginalSelectedSongIds] = useState([])
  const [selectedSongIds, setselectedSongIds] = useState([])
  const [searchField, setSearchField] = useState('')
  const [gameId, setGameId] = useState()
  const [game, setGame] = useState(null)
  const [gameName, setGameName] = useState('')
  const [gamesOn, setGamesOn] = useState(false)
  const [teamsAmount, setTeamsAmount] = useState(2)

  const navigate = useNavigate()

  const {gameId: gameIdFromUrl} = useParams()

  useEffect(() => {
    const getAllSongs = async () => {
      const songsFromDb = await getSongs()
      setAllSongs(songsFromDb)
    }

    getAllSongs()
    if (gameIdFromUrl) {
      setGameId(gameIdFromUrl)
    }
  }, [gameIdFromUrl])

  useEffect(() => {
    const getGame = async () => {
      const gameData = await getOneGame(gameId)
      if (gameData) {
        setGame(gameData)
        setGameName(gameData.gameName)
        setTeamsAmount(Object.values(gameData.teams).length)
        setselectedSongIds(gameData.songIdList || [])
        setOriginalSelectedSongIds(gameData.songIdList || [])
      }
    }
    getGame()
  }, [gameId])

  useEffect(() => {
    const getUserCount = async () => {
      const gameMastersOnlineCount = await getGameMastersOnlineCount(gameId)
      setGamesOn(gameMastersOnlineCount)
    }
    getUserCount()
  })

  const handleSaveGameClick = async () => {
    const saveGameId = gameId || rnd.generate(4).toUpperCase()
    const songList = Object.values(allSongs).filter(song => selectedSongIds.includes(song.songId))
    const currentSongIndex = getRandomSong([], songList)
    const song = await getSong(selectedSongIds[currentSongIndex])
    const lyrics = _.get(song, 'lyrics')
    updateGame(saveGameId, currentSongIndex, lyrics, selectedSongIds, gameName, teamsAmount)
    setGameId(saveGameId)
    navigate(`/gameEditor/${saveGameId}`)
    setOriginalSelectedSongIds(selectedSongIds)
  }

  const handleSearchChange = e => {
    setSearchField(e.target.value)
  }

  const filteredSongs = Object.values(allSongs).filter(
    song => {
      return (
        song
          .artist
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        song
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        song
          .lyrics
          .toString()
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    }
  )

  const get10RandomSongIds = () => {
    const nonSelectedSongIds = Object.values(allSongs)
      .filter(song => !selectedSongIds.includes(song.songId))
      .map(song => song.songId)
    return nonSelectedSongIds.sort(() => Math.random() - Math.random()).slice(0, 10)
  }

  const onTeamsAmountChange = e => {
    setTeamsAmount(Number(e.target.value))
  }

  const songList = searchField ? filteredSongs : Object.values(allSongs)

  return (
    <div className='UpdateGame'>
      <Link className='LinkButton' to='/'>Takaisin alkuun</Link>
      <Header gameId={gameId || ''} />
      {gamesOn > 0 &&
        <div className='GameInUse'><h3>Peli on käytössä!</h3> <p>Joku pelaa tätä peliä tällä hetkellä, joten ethän tee
          muokkauksia tai resetoi peliä. <br />Pelaajia linjoilla: {gamesOn}</p></div>}
      {
        game &&
        <div className='LinkButtons'>
          <Link className='LinkButton' to={`/${game.gameId}`}>Pelaamaan!</Link>
          <Link className='LinkButton' to={`/master/${game.gameId}`}>Game Master</Link>
          <div className='LinkButton ResetButton' onClick={() => resetGame(gameId, teamsAmount)}>(Resetoi peli)</div>
        </div>
      }
      <p>Valitse biisit listasta tai hae käyttämällä hakukenttää</p>
      <label className='Label'>
        Pelin nimi
        <input
          className='Input'
          type='text'
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
      </label>
      <div>
        Tiimien määrä
        {[...Array(4).keys()].map(i => {
          const amount = i + 2
          return (
            <div key={amount}>
              <input
                type="radio"
                name="teamAmount"
                value={amount}
                id={(amount).toString()}
                checked={teamsAmount === amount}
                onChange={onTeamsAmountChange}
              />
              <label htmlFor={(amount).toString()}>{(amount).toString()}</label>
            </div>
          )
        }
        )}
      </div>
      <div className='UpdateGame__selectedSongIds'>
        <h3>Valitut biisit ({selectedSongIds.length} kpl)</h3>
        {originalSelectedSongIds !== selectedSongIds && <p className='UpdateGame__saveSongs'>Muista tallentaa tekemäsi muutokset</p>}
        {selectedSongIds && selectedSongIds.length === 0 &&
          <div>Ei vielä valittuja biisejä. Valitse ainakin yksi tallentaaksesi pelin.</div>}
        {selectedSongIds && selectedSongIds
          .sort((a, b) => sortByArtistAndSongName(allSongs[a], allSongs[b]))
          .map((songId) => {
            const song = allSongs[songId]
            if (!song) return null
            return (
              <div className={cx('UpdateGame__selectedSongs__song', !originalSelectedSongIds.includes(songId) && 'UpdateGame__selectedSongs__song__unsaved')} key={songId}>
                <FaTrashAlt onClick={() => setselectedSongIds(selectedSongIds.filter(id => id !== song.songId))} />
                <div className='UpdateGame__selectedSongs__songDetails'>
                  <div>{song.artist} - {song.name} ({song.lyrics.join(' ')})</div>
                  {song.question &&
                    <div>{song.question} - {song.answer}</div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='UpdateGame__buttons'>
        <div>
          <button
            disabled={(selectedSongIds && selectedSongIds.length === 0) || !gameName}
            className='UpdateGame__saveButton'
            onClick={() => handleSaveGameClick()}
          >
            Tallenna peli
          </button>
          <div className='LinkButton' onClick={() => window.location.reload()}>Peru muutokset</div>
        </div>
      </div>
      <div className='LinkButtons'>
        <div
          className='LinkButton'
          onClick={() => setselectedSongIds([...selectedSongIds, ...get10RandomSongIds()])}
        >
          Lisää 10 random biisiä
        </div>
      </div>
      <div className='UpdateGame__songList'>
        <h3>Kaikki biisit</h3>
        <label className='Label'>
          Etsi
          <input
            className='Input'
            type='search'
            placeholder='Etsi Biisejä'
            onChange={handleSearchChange}
          />
        </label>
        {songList && songList
          .filter(song => !selectedSongIds.includes(song.songId))
          .sort((a, b) => sortByArtistAndSongName(a, b))
          .map((song) => (
            <div className='UpdateGame__allSongs__song' key={song.songId} id={song.songId}>
              {selectedSongIds && !selectedSongIds.includes(song.songId) &&
                <button onClick={() => setselectedSongIds([...selectedSongIds, song.songId])}>lisää</button>}
              <div className='UpdateGame__allSongs__songDetails'>
                <div>{song.artist} - {song.name} ({song.lyrics.join(' ')})</div>
                {song.question &&
                  <div>{song.question} - {song.answer}</div>
                }
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UpdateGame
