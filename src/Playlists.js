import {useEffect, useState} from 'react'
import { getPlaylistsRef } from './services/firebase'

const Playlists = () => {

  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const listener = getPlaylistsRef().on('value', snapshot => {
      if (snapshot.val()) {
        setPlaylists(Object.values(snapshot.val()), song => song.song, 'asc')
      } else {
        setPlaylists([])
      }
    })

    return () => getPlaylistsRef().off('value', listener)
  }, [])

  return (
    <p>Soittolistat</p>
  )

}

export default Playlists