import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import rnd from 'randomstring'
import {FaPencilAlt} from 'react-icons/fa'
import {updateSong, getSongs, setInitialSongs} from './services/firebaseDB'
import {Link} from 'react-router-dom'
import {sortByArtistAndSongName} from './utils/utils'
import './Songs.css'

const Songs = () => {
  const [artist, setArtist] = useState('')
  const [name, setName] = useState('')
  const [lyrics, setLyrics] = useState([])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [allSongs, setAllSongs] = useState({})
  const [editedSong, setEditedSong] = useState(null)

  const getAllSongs = async () => {
    const songsFromDb = await getSongs()
    setAllSongs(songsFromDb)
  }

  useEffect(() => {
    getAllSongs()
  }, [])

  const resetValues = () => {
    setArtist('')
    setName('')
    setLyrics([])
    setQuestion('')
    setAnswer('')
  }

  const handleUpdateSongClick = (e) => {
    e.preventDefault()
    const songId = editedSong ? editedSong.songId : rnd.generate(4).toUpperCase()

    // If there's english "a", "an" or "the", merge that to next word,
    // so they're both behind a same card
    const articles = ['a', 'an', 'the']
    const formattedLyrics = lyrics.map((word, i) => {
      const previousWord = lyrics[i - 1]
      if (previousWord && articles.includes(previousWord)) {
        return `${previousWord} ${word}`
      }
      return word
    })
      .filter(word => !articles.includes(word))
      .filter(word => word && word !== '')

    // const formattedLyrics = lyrics.filter(word => word && word !== '')
    const lyricsObject = Object.assign({}, formattedLyrics)

    const newSong = {
      lyrics: lyricsObject,
      artist,
      name,
      question,
      answer
    }
    updateSong(songId, newSong)
    getAllSongs()
    resetValues()
    setEditedSong(null)
  }

  const handleEditSong = (songId) => {
    const song = Object.values(allSongs).find(song => song.songId === songId)
    setEditedSong(song)
    setArtist(song.artist)
    setName(song.name)
    setLyrics(song.lyrics)
    setQuestion(song.question)
    setAnswer(song.answer)
  }

  const handleSettingLyrics = (lyrics) => {
    const parsedLyrics = lyrics.replace(/[^A-Za-zÀ-ȕ0-9' ]/g, '')
    const lyricsArray = parsedLyrics.split(/\s+/)
    // // If there's english "a", "an" or "the", merge that to next word,
    // // so they're both behind a same card
    // const articles = ['a', 'an', 'the']
    // const formattedLyricsArray = lyricsArray.map((word, i) => {
    //   const previousWord = lyricsArray[i - 1]
    //   if (previousWord && articles.includes(previousWord)) {
    //     return `${previousWord} ${word}`
    //   }
    //   return word
    // }).filter(word => !articles.includes(word))
    // setLyrics(formattedLyricsArray)
    setLyrics(lyricsArray)
  }

  const cancelEdit = () => {
    setEditedSong(null)
    resetValues()
  }

  const addBaseSongs = () => {
    setInitialSongs()
    getAllSongs()
  }

  const filteredSongs = Object.values(allSongs).filter(
    song => {
      return (
        song
          .artist
          .toLowerCase()
          .includes(artist.toLowerCase())
      )
    }
  )

  const songList = artist ? filteredSongs : Object.values(allSongs)

  return (
    <div className='Songs'>
      <Link className='LinkButton' to='/'>Takaisin alkuun</Link>
      <form className='Songs__form' onSubmit={(e) => handleUpdateSongClick(e)}>
        <label className='Label'>
          Artisti
          <input
            className='Input'
            type='text'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <label className='Label'>
          Biisin nimi
          <input
            className='Input'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='Label'>
          Biisin sanat erotettuna väliyönnillä
          <textarea
            className='Input'
            type='text'
            value={lyrics.join(' ')}
            onChange={(e) => handleSettingLyrics(e.target.value)}
          />
        </label>
        <label className='Label'>
          Ekstrakysymys (valinnainen)
          <input
            className='Input'
            type='text'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <label className='Label'>
          Ekstrakysymyksen vastaus (valinnainen)
          <input
            className='Input'
            type='text'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <input type='submit' value={editedSong ? 'Tallenna muutokset' : 'Lisää uusi biisi'}
          disabled={!artist || !name || !lyrics} />
        {editedSong && <button onClick={() => cancelEdit()}>peru</button>}
      </form>

      <h4>{!artist ? 'Olemassaolevat biisit:' : 'Biisit artistilta:'} </h4>
      <div className='Songs__songList'>
        {songList && !editedSong && songList
          .sort((a, b) => sortByArtistAndSongName(a, b))
          .map((song) => (
            <div className='Songs__song' id={song.songId} key={song.songId}>
              {!editedSong && <FaPencilAlt onClick={() => handleEditSong(song.songId)} />}
              <div className='Songs__songDetails'>
                <div>{song.artist} - {song.name} ({song.lyrics.join(' ')})</div>
                {song.question &&
                  <div>* {song.question}: {song.answer}</div>
                }
              </div>
            </div>
          ))}
      </div>

      {(!allSongs || _.size(allSongs) < 5) &&
        <button onClick={() => addBaseSongs()}>Lisää oletusbiisit tietokantaan!</button>}
    </div>
  )
}

export default Songs
