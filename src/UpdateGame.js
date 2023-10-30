import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import {FaTrashAlt} from 'react-icons/fa'
import {Link, useHistory} from 'react-router-dom'
import {
  getSongs,
  getSong,
  updateGame,
  getOneGame,
  resetSongArchive,
  getGameMastersOnlineCount
} from './services/firebase'
import {getRandomSong, sortByArtist} from './utils/utils'
import Header from './Header'
import rnd from 'randomstring'
import './UpdateGame.css'

const UpdateGame = (props) => {
  const [allSongs, setAllSongs] = useState({})
  const [filteredSongs, setFilteredSongs] = useState([])
  const [selectedSongIds, setselectedSongIds] = useState([])
  const [searchField, setSearchField] = useState('')
  const [gameId, setGameId] = useState()
  const [game, setGame] = useState(null)
  const [gameName, setGameName] = useState('')
  const [gamesOn, setGamesOn] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const getAllSongs = async () => {
      const songsFromDb = await getSongs()
      setAllSongs(songsFromDb)
    }

    getAllSongs()
    const gameIdFromUrl = props.match.params.gameId
    if (gameIdFromUrl) {
      setGameId(gameIdFromUrl)
    }
  }, [props.match.params.gameId])

  useEffect(() => {
    const getGame = async () => {
      const gameData = await getOneGame(gameId)
      if (gameData) {
        setGame(gameData)
        setGameName(gameData.gameName)
        setselectedSongIds(gameData.songIdList || [])
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
    updateGame(saveGameId, currentSongIndex, lyrics, selectedSongIds, gameName)
    setGameId(saveGameId)
    history.push(`/gameEditor/${saveGameId}`)
  }

  const setFiltered = () => {
    const filtered = Object.values(allSongs).filter(
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

    setFilteredSongs(filtered)
  }

  const handleSearchChange = e => {
    setSearchField(e.target.value)
    setFiltered()
  }

  const get10RandomSongIds = () => {
    const nonSelectedSongIds = Object.values(allSongs)
      .filter(song => !selectedSongIds.includes(song.songId))
      .map(song => song.songId)
    return nonSelectedSongIds.sort(() => Math.random() - Math.random()).slice(0, 10)
  }

  const songsList = searchField ? filteredSongs : Object.values(allSongs)

  return (
    <div className='UpdateGame'>
      <Link className='LinkButton' to='/'>Takaisin alkuun</Link>
      <Header gameId={gameId || ''}/>
      {gamesOn > 0 &&
        <div className='GameInUse'><h3>Peli on käytössä!</h3> <p>Joku pelaa tätä peliä tällä hetkellä, joten ethän tee
          muokkauksia tai resetoi peliä. <br/>Pelaajia linjoilla: {gamesOn}</p></div>}
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
      <div className='UpdateGame__selectedSongIds'>
        <h3>Valitut biisit ({selectedSongIds.length} kpl)</h3>
        {selectedSongIds && selectedSongIds.length === 0 &&
          <div>Ei vielä valittuja biisejä. Valitse ainakin yksi tallentaaksesi pelin.</div>}
        {selectedSongIds && selectedSongIds
          .sort((a, b) => sortByArtist(allSongs[a], allSongs[b]))
          .map((songId) => {
            const song = allSongs[songId]
            if (!song) return null
            return (
              <div className='UpdateGame__selectedSongs__song' key={songId}>
                <FaTrashAlt onClick={() => setselectedSongIds(selectedSongIds.filter(id => id !== song.songId))}/>
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
        {
          game &&
          <div className='LinkButtons'>
            <Link className='LinkButton' to={`/${game.gameId}`}>Pelaamaan!</Link>
            <Link className='LinkButton' to={`/master/${game.gameId}`}>Game Master</Link>
            <div className='LinkButton' onClick={() => resetSongArchive(gameId)}>(Resetoi peli)</div>
          </div>
        }
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
        {songsList && songsList
          .filter(song => !selectedSongIds.includes(song.songId))
          .sort((a, b) => sortByArtist(a, b))
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
