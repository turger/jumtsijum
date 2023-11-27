import _ from 'lodash'

export const getRandomSong = (songArchive = [], songList) => {
  const array = _.range(0, songList.length)
  _.remove(array, i => _.includes(songArchive, i))
  return array[Math.floor(Math.random() * array.length)]
}

export const sortByArtistAndSongName = (songA, songB) => {
  if (!songA || !songB || !songA.artist || !songB.artist) return -1
  return songA.artist.localeCompare(songB.artist) || songA.name.localeCompare(songB.name)
}
