import React, { useState, useEffect } from 'react'
import { getSongsRef, uploadBaseSongs, removeSong } from './services/firebase'
import _ from 'lodash'
import CreateSong from './CreateSong'
import './Songs.css'

const Songs = () => {
  const [songs, setSongs] = useState([])
  const [selectedSongs, setSelectedSongs] = useState([])
  const [createMode, setCreateMode] = useState(true)

  useEffect(() => {
    const listener = getSongsRef().on('value', snapshot => {
      if (snapshot.val()) {
        setSongs(_.orderBy(Object.values(snapshot.val()), song => song.song, 'asc'))
      } else {
        setSongs([])
      }
    })

    return () => getSongsRef().off('value', listener)
  }, [])

  useEffect(() => {
    console.log('Updated playlist: ', selectedSongs)
  }, [selectedSongs])

  const resetSongsInDB = () => {
    if (window.confirm('Haluatko varmasti yliajaa nykyiset kappaleet oletuskappaleilla?')) {
      uploadBaseSongs()
    }
  }

  const updateSelected = (id) => {
    selectedSongs.includes(id) ?
      setSelectedSongs(selectedSongs.filter(song => song !== id))
      : setSelectedSongs([...selectedSongs, id])
  }

  if (songs && songs.length > 0) {
    return (
      <>
        <div className='table-container'>
          <table>
            <thead>
              <tr className='songrow'>
                <td></td>
                <td>Kappale</td>
                <td>Artisti</td>
                <td>Sanat</td>
                <td>🗑️</td>
              </tr>
            </thead>
            <tbody>
              {songs.map(song => <Song key={song.id} song={song} updateSelected={updateSelected} />)}
            </tbody>
          </table>
        </div>
        <p>Yhteensä {songs.length} kappaletta</p>
        <button className='dangerzone' onClick={resetSongsInDB}>Nollaa &amp; palauta oletuskappaleet</button>
        {createMode && <CreateSong />}
      </>
    )
  }
  return (
    <>
      <p>Ei kappaleita</p>
      <button className='dangerzone' onClick={resetSongsInDB}>Palauta oletuskappaleet</button>
      <CreateSong />
    </>
  )
}

const Song = ({ song, updateSelected }) => {

  const [selected, setSelected] = useState(false)

  const remove = (id) => {
    if (window.confirm('Haluatko varmasti poistaa tämän kappaleen?')) {
      removeSong(id)
    }
  }

  const toggle = () => {
    console.log('toggling song: ', song.id)
    setSelected(!selected)
    updateSelected(song.id)
  }

  return (<tr className={`songrow ${selected ? 'active-row' : ''}`}>
    <td><input type='checkbox' onChange={toggle} /></td>
    <td>{song.song}</td>
    <td>{song.artist}</td>
    <td className='lyric-container'>
      {song.lyrics?.length > 0 && song.lyrics.map((lyric, i) => <Lyric key={`${song}-${lyric}-${i}`} word={lyric} />)}
    </td>
    <td className='clickable-icon' onClick={() => remove(song.id)}>🗑️</td>
  </tr>)
}

const Lyric = ({ word }) => (
  <div className='lyric-tag'>{word}</div>
)

export default Songs