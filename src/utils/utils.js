import _ from 'lodash'

export const getRandomSong = (songArchive = [], songList) => {
  const array = _.range(0, songList.length)
  _.remove(array, i => _.includes(songArchive, i))
  return array[Math.floor(Math.random() * array.length)]
}