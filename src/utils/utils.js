import _ from 'lodash'
import songList1 from '../songs/list-1'
import songList2 from '../songs/list-2'
import vappu22 from '../songs/vappu-22'

export const getRandomSong = (songArchive = [], songList) => {
  const array = _.range(0, songList.length)
  _.remove(array, i => _.includes(songArchive, i))
  return array[Math.floor(Math.random() * array.length)]
}

export const songLists = {'LISTA1': songList1, 'LISTA2': songList2, 'VAPPU22': vappu22}
