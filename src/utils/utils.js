import _ from 'lodash'
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

export const songLists = {
  '90-00': ysinolla,
  'KLASSIKOT': klassikot,
  'ENG': english,
  'BILEET': bileet,
  'NYKY': nyky
}
