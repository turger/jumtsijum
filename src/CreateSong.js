import React, { useState } from 'react'
import { addNewSong } from './services/firebase'

const CreateSong = ({ setCreateMode }) => {
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const [lyrics, setLyrics] = useState([])

  const reset = () => {
    setSong('')
    setArtist('')
    setLyrics([])
  }

  const addSong = (event) => {
    event.preventDefault()
    const newSong = {
      artist: artist,
      song: song
    }
    addNewSong(newSong)
    reset()
  }

  return (
    <form onSubmit={addSong}>
      <p>Lisää uusi kappale</p>
      <div>
        Artisti: <input value={artist} onChange={(event) => setArtist(event.target.value)} />
      </div>
      <div>
        Kappale: <input value={song} onChange={(event) => setSong(event.target.value)} />
      </div>
      <div>
        Sanat: <Lyrics lyrics={lyrics} setLyrics={setLyrics}/>
      </div>
      <button>Tallenna</button>
    </form>
  )
}

const Lyrics = ({ lyrics, setLyrics }) => {
  return (
    <ul>
      {lyrics?.map(lyric => <li>{lyric}</li>)}
    </ul>
  )
}

export default CreateSong