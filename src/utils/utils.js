import _ from 'lodash'
import songs from '../song-data.js'

export const getRandomSong = (songArchive = []) => {
  const array = _.range(0, songs.length)
  _.remove(array, i => _.includes(songArchive, i))
  return array[Math.floor(Math.random() * array.length)]
}