import {child, ref, get, push, set, update, remove, onDisconnect} from 'firebase/database'
import _ from 'lodash'
import {getRandomSong} from '../utils/utils'
import rnd from 'randomstring'
import songList from '../base_songs'
import {getFirebaseDB} from './firebaseInit'

const db = getFirebaseDB()

// Game

export const getOneGame = gameId =>
  get(ref(db, `games/${gameId}`)).then((snap) => snap.val())

export const getAllGames = () =>
  get(ref(db, 'games')).then((snap) => snap.val())

const getTeams = (teamsAmount) => {
  const allTeams = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
  ]

  // default to 2 teams
  const amount = teamsAmount ? teamsAmount : 2

  const teamsWithPoints = allTeams.slice(0, amount).map(team => ({[team]: {points: 0}}))
  return Object.assign({}, ...teamsWithPoints);
}

export const updateGame = async (gameId, currentSongIndex, lyrics, songIdList, gameName, teamsAmount) => {
  const cardStatuses = Object.keys(lyrics).map((id) => ({'isOpen': false, 'isRed': false}))
  const teams = getTeams(teamsAmount)
  await set(ref(db, `games/${gameId}`), {
    gameId,
    currentSongIndex,
    songIdList,
    gameName,
    updated: Date.now(),
    teams,
    cards: cardStatuses
  })

  // Set to archive if this is a new game
  const archive = await getSongArchive(gameId)
  if (!archive) {
    const archiveRef = ref(db, `games/${gameId}/songArchive`)
    push(archiveRef, currentSongIndex)
  }
}

// Songs

export const getAllSongs = () =>
  get(ref(db, 'songs')).then((snap) => snap.val())

export const getCurrentSongIndex = gameId =>
  get(ref(db, `games/${gameId}/currentSongIndex`)).then((snap) => snap.val())

export const getCurrentSongIndexRef = gameId =>
  ref(db, `games/${gameId}/currentSongIndex`)

export const getSongArchive = (gameId) =>
  get(ref(db, `games/${gameId}/songArchive`)).then((snap) => snap.val())

export const getSongByGameIdAndCurrentSongIndex = async (gameId, currentSongIndex) => {
  if (!gameId || currentSongIndex === null) return null
  const game = await getOneGame(gameId)
  if (!game) return null
  const songIdList = game.songIdList
  const songId = songIdList[currentSongIndex]
  return get(ref(db, `songs/${songId}`)).then((snap) => snap.val())
}

export const resetGame = async (gameId, teamsAmount) => {
  await remove(ref(db, `games/${gameId}/songArchive`))
  await setNewSong(gameId)
  const teams = getTeams(teamsAmount)
  await resetTeams(gameId, teams)
}

export const setNewSong = async (gameId) => {
  const game = await getOneGame(gameId)
  const {songIdList, songArchive, currentSongIndex} = game
  const songArchiveArray = songArchive ? Array.from(Object.values(songArchive)) : []
  const allSongs = await getAllSongs(gameId)
  const songList = Object.values(allSongs).filter(song => songIdList.includes(song.songId))
  const newCurrentSongIndex = getRandomSong([...songArchiveArray, currentSongIndex], songList)
  if (newCurrentSongIndex || newCurrentSongIndex === 0) {
    const newSong = await getSongByGameIdAndCurrentSongIndex(gameId, newCurrentSongIndex)
    setNewCurrentSongIndex(gameId, newCurrentSongIndex, newSong.lyrics)
    return newSong
  }
  return null
}

export const setNewCurrentSongIndex = (gameId, newCurrentSongIndex, lyrics) => {
  const currentSongIndexRef = ref(db, `games/${gameId}/currentSongIndex`)
  const archiveRef = ref(db, `games/${gameId}/songArchive`)
  const cardsRef = ref(db, `games/${gameId}/cards`)

  push(archiveRef, newCurrentSongIndex)
  set(currentSongIndexRef, newCurrentSongIndex)
  set(cardsRef, Object.keys(lyrics).map((id) => ({'isOpen': false, 'isRed': false})))
}

export const updateSong = (songId, song) => {
  update(ref(db, `songs/${songId}`), {songId, ...song})
}

export const setInitialSongs = () => {
  const updates = {}
  songList.forEach(song => {
    if (!song.question) song.question = ''
    if (!song.answer) song.answer = ''
    const songId = rnd.generate(4).toUpperCase()
    updates[`songs/${songId}`] = {songId, ...song}
  })

  update(ref(db), updates)
}

export const getSongs = () =>
  get(ref(db, 'songs')).then((snap) => snap.val())

export const getSong = songId =>
  get(ref(db, `songs/${songId}`)).then((snap) => snap.val())

export const getSongsLeft = async (gameId) => {
  if (!gameId) return null
  const game = await getOneGame(gameId)
  const songIdList = _.get(game, 'songIdList')
  const songArchive = await getSongArchive(game.gameId) || []
  if (songIdList) {
    return _.size(songIdList) - _.size(songArchive)
  }
  return 0
}

// Teams & points

export const getTeamsRef = gameId =>
  ref(db, `games/${gameId}/teams`)

export const resetTeams = (gameId, teams) =>
  update(child(ref(db), `games/${gameId}`), {teams})

export const updatePoints = (gameId, team, points) =>
  update(child(ref(db), `games/${gameId}/teams/${team}`), {points})

// Cards

export const openCard = async (gameId, cardId) => {
  await update(ref(db, `games/${gameId}/cards/${cardId}`), {'isOpen': true})
  // If this is the first opened card of the lyrics, set red cards also
  const cardStatuses = await getCardStatuses(gameId)
  const openCards = cardStatuses.filter(status => status.isOpen)
  if (openCards.length === 1) {
    setRedCards(gameId)
  }
}

export const getCardStatusesRef = gameId =>
  ref(db, `games/${gameId}/cards`)

export const getCardStatuses = gameId =>
  get(ref(db, `games/${gameId}/cards`)).then((snap) => snap.val())


export const setRedCards = async (gameId) => {
  const cardStatuses = await getCardStatuses(gameId)
  const lyricsCount = Object.keys(cardStatuses).length
  const redCards = getRedCards(lyricsCount, cardStatuses.map(status => status.isOpen).indexOf(true))
  const updatedCardStatuses = Object.keys(cardStatuses).map((id) => ({'isOpen': cardStatuses[id].isOpen, 'isRed': redCards.includes(id)}))

  update(ref(db, `games/${gameId}`), {cards: updatedCardStatuses})
}

const getRedCards = (lyricsCount, openedCardId) => {
  const getRedCardId = () => {
    const random = Math.floor(Math.random() * lyricsCount).toString()
    return Number(random) === Number(openedCardId) ? getRedCardId() : random
  }
  // Possibility for two red cards if there's more than five cards in lyrics
  const moreRed = Math.random() < 0.7
  return lyricsCount > 5 && moreRed ? [getRedCardId(), getRedCardId()] : [getRedCardId()]
}

// Game masters online

export const addGameMasterViewer = gameId => {
  const gameRef = ref(db, `games/${gameId}`)
  // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
  const gameMaster = push(child(gameRef, 'gameMastersOnline'))
  // When I disconnect, remove this device
  onDisconnect(gameMaster).remove()
  // Add this device to my connections list
  set(gameMaster, true)
}

export const getGameMastersOnlineCount = gameId =>
  get(ref(db, `games/${gameId}/gameMastersOnline`)).then((snap) => snap.val() ? Object.keys(snap.val()).length : 0)

export const getGameMastersOnlineRef = gameId => ref(db, `games/${gameId}/gameMastersOnline`)
