import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import cx from 'classnames'
import rnd from 'randomstring'
import {FaPencilAlt} from 'react-icons/fa'
import {updateSong, getSongs, setInitialSongs} from './services/firebaseDB'
import {Link} from 'react-router-dom'
import {sortByArtistAndSongName} from './utils/utils'
import {languages} from './constants'
import './Songs.css'

const {FI, SV, EN, OTHER, ALL} = languages

const languageSelectorOptions = [
  {value: OTHER, title: "Muu"},
  {value: FI, title: "Suomi"},
  {value: EN, title: "Englanti"},
  {value: SV, title: "Ruotsi"},
]

const languageSelectorOptionsWithAll = [{value: ALL, title: "Kaikki"}, ...languageSelectorOptions]

const filteredSongs = (allSongs, artist, selectedLanguageFilter) => {
  const filteredByArtist = artist ? Object.values(allSongs).filter(
    song => song
      .artist
      .toLowerCase()
      .includes(artist.toLowerCase())
  ) : Object.values(allSongs)

  const filteredByLanguage = selectedLanguageFilter !== ALL ? filteredByArtist.filter(
    song => song.language === selectedLanguageFilter
  ) : filteredByArtist

  return filteredByLanguage
} 

const Songs = () => {
  const [artist, setArtist] = useState('')
  const [name, setName] = useState('')
  const [lyrics, setLyrics] = useState([])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [language, setLanguage] = useState(OTHER)
  const [allSongs, setAllSongs] = useState({})
  const [editedSong, setEditedSong] = useState(null)
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState(ALL)

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
    setLanguage(OTHER)
  }

  const getArticles = () => {
    if (language === EN) {
      // A and an are indefinite articles, and the is a definite article
      return ['a', 'an', 'the']
    } else if (language === SV) {
      // En and ett are indefinite articles, and den, det, and de are definite articles
      return ['en', 'ett', 'den', 'det', 'de']
    } else {
      return []
    }
  }

  const handleArticles = () => {
    // If there's articles like in english "a", "an" or "the", merge that to next word,
    // so they're both behind a same card
    const articles = getArticles()
    return lyrics.map((word, i) => {
      const previousWord = lyrics[i - 1]
      if (previousWord && articles.includes(previousWord)) {
        return `${previousWord} ${word}`
      }
      return word
    })
      .filter(word => !articles.includes(word))
      .filter(word => word && word !== '')
  }

  const handleUpdateSongClick = (e) => {
    e.preventDefault()
    const songId = editedSong ? editedSong.songId : rnd.generate(4).toUpperCase()

    const formattedLyrics = handleArticles()

    const lyricsObject = Object.assign({}, formattedLyrics)

    const newSong = {
      lyrics: lyricsObject,
      artist,
      name,
      question,
      answer,
      language
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
    setLanguage(song.language)
  }

  const handleSettingLyrics = (lyrics) => {
    const parsedLyrics = lyrics.replace(/[^A-Za-zÀ-ȕ0-9' ]/g, '')
    const lyricsArray = parsedLyrics.split(/\s+/)
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

  const songList = filteredSongs(allSongs, artist, selectedLanguageFilter)

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
        <label className='Label'>
          Laulun kieli
          <select onChange={e => setLanguage(e.target.value)} value={language} className='Select'>
            {languageSelectorOptions.map((option) =>
              <option key={option.value} value={option.value}>{option.title}</option>
            )}
          </select>
        </label>
        <input type='submit' value={editedSong ? 'Tallenna muutokset' : 'Lisää uusi biisi'}
               disabled={!artist || !name || !lyrics}/>
        {editedSong && <button onClick={() => cancelEdit()}>peru</button>}
      </form>

      {!editedSong && (
        <>
          <br/>
          <label className={cx('Label', selectedLanguageFilter !== ALL && 'Songs__languageFilterSelected')}>
            Suodata biisejä kielen mukaan
            <select onChange={e => setSelectedLanguageFilter(e.target.value)} value={selectedLanguageFilter}
                    className={'SmallSelect'}>
              {languageSelectorOptionsWithAll.map((option) =>
                <option key={option.value} value={option.value}>{option.title}</option>
              )}
            </select>
          </label>
        </>
      )}

      {!editedSong &&
        <h4>{
          `Olemassaolevat biisit ${artist ? `artistilta "${artist}"` : ''} ${selectedLanguageFilter !== ALL ? `kielellä "${selectedLanguageFilter}"` : ''} (${songList.length})`
        }</h4>
      }
      <div className='Songs__songList'>
        {songList && !editedSong && songList
          .sort((a, b) => sortByArtistAndSongName(a, b))
          .map((song) => (
            <div className='Songs__song' id={song.songId} key={song.songId}>
              {!editedSong && <FaPencilAlt onClick={() => handleEditSong(song.songId)}/>}
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
