import React, { useState, useEffect } from 'react'
import { getSongsRef, uploadBaseSongs, removeSong } from './services/firebase'
import CreateSong from './CreateSong'
import './Songs.css'

const Songs = () => {
  const [songs, setSongs] = useState([])
  const [createMode, setCreateMode] = useState(true)

  useEffect(() => {
    const listener = getSongsRef().on('value', snapshot => {
      if (snapshot.val()) {
        setSongs(Object.values(snapshot.val()))
      } else {
        setSongs([])
      }
    })

    return () => getSongsRef().off('value', listener)
  }, [])

  const resetSongsInDB = () => {
    if (window.confirm('Haluatko varmasti yliajaa nykyiset kappaleet oletuskappaleilla?')) {
      uploadBaseSongs()
    }
  }

  if (songs && songs.length > 0) {
    return (
      <>
        <div className='table-container'>
          <table>
            <tbody>
              {songs.map(song => <Song key={song.id} song={song} />)}
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

const Song = ({ song }) => {
  const remove = (id) => {
    if (window.confirm('Haluatko varmasti poistaa tämän kappaleen?')) {
      removeSong(id)
    }
  }

  return (<tr className="songrow">
    <td>{song.song}</td>
    <td>{song.artist}</td>
    <td className='lyric-container'>
      {song.lyrics?.length > 0 && song.lyrics.map((lyric, i) => <Lyric key={`${song}-${lyric}-${i}`} word={lyric} />)}
    </td>
    <td onClick={() => remove(song.id)}>[Poista]</td>
  </tr>)
}

const Lyric = ({ word }) => (
  <div className='lyric'>{word}</div>
)

export default Songs