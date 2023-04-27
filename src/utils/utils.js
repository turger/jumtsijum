import _ from 'lodash'
import { getSongArchive, getSongListKey } from '../services/firebase'
import ysinolla from '../songs/90-00'
import klassikot from '../songs/klassikot'
import english from '../songs/english'
import bileet from '../songs/bileet'
import nyky from '../songs/nykyaikaisempaa'

export const getRandomSong = (songArchive = [], songList) => {
  const array = _.range(0, songList.length)
  _.remove(array, i => _.includes(songArchive, i))
  return array[Math.floor(Math.random() * array.length)]
}

export const getSongNumber = async (gameId) => {
  const songArchive = await getSongArchive(gameId) || []
  if (songArchive) {
    return _.size(songArchive)
  }
  return 0
}

export const getSongsLeft = async (gameId) => {
  const songListKey = await getSongListKey(gameId)
  const songList = _.get(songLists, songListKey)
  const songArchive = await getSongArchive(gameId) || []
  if (songList) {
    return _.size(songList) - _.size(songArchive)
  }
  return 0
}

export const songLists = {
  '90-00': ysinolla,
  'KLASSIKOT': klassikot,
  'ENG': english,
  'BILEET': bileet,
  'NYKY': nyky
}
