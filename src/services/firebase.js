import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import _ from 'lodash'
import {getRandomSong} from '../utils/utils'
import rnd from 'randomstring'
import songList from '../base_songs'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
}

const fb = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
var db = fb.database()

// Game

export const getOneGame = gameId =>
  db.ref(`games/${gameId}`).once('value').then((snap) => snap.val())

export const getAllGames = () =>
  db.ref('games').once('value').then((snap) => snap.val())

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
  await db.ref(`games/${gameId}`).update({
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
    const archiveRef = db.ref(`games/${gameId}/songArchive`)
    archiveRef.push(currentSongIndex)
  }
}

// Songs

export const getAllSongs = () =>
  db.ref('songs').once('value').then((snap) => snap.val())

export const getCurrentSongIndex = gameId =>
  db.ref(`games/${gameId}/currentSongIndex`).once('value').then((snap) => snap.val())

export const getCurrentSongIndexRef = gameId =>
  db.ref(`games/${gameId}/currentSongIndex`)

export const getSongArchive = (gameId) =>
  db.ref(`games/${gameId}/songArchive`).once('value').then((snap) => snap.val())

export const getSongByGameIdAndCurrentSongIndex = async (gameId, currentSongIndex) => {
  if (!gameId || currentSongIndex === null) return null
  const game = await getOneGame(gameId)
  const songIdList = game.songIdList
  const songId = songIdList[currentSongIndex]
  return db.ref(`songs/${songId}`).once('value').then((snap) => snap.val())
}

export const resetGame = async (gameId, teamsAmount) => {
  await db.ref(`games/${gameId}/songArchive`).remove()
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
  const currentSongIndexRef = db.ref(`games/${gameId}/currentSongIndex`)
  const archiveRef = db.ref(`games/${gameId}/songArchive`)
  const cardsRef = db.ref(`games/${gameId}/cards`)

  archiveRef.push(newCurrentSongIndex)
  currentSongIndexRef.set(newCurrentSongIndex)
  cardsRef.set(Object.keys(lyrics).map((id) => ({'isOpen': false, 'isRed': false})))
}

export const updateSong = (songId, song) => {
  db.ref(`songs/${songId}`).update({songId, ...song})
}

export const setInitialSongs = () => {
  const updates = {}
  songList.forEach(song => {
    if (!song.question) song.question = ''
    if (!song.answer) song.answer = ''
    const songId = rnd.generate(4).toUpperCase()
    updates[`songs/${songId}`] = {songId, ...song}
  })

  db.ref().update(updates)
}

export const getSongs = () =>
  db.ref('songs').once('value').then((snap) => snap.val())

export const getSong = songId =>
  db.ref(`songs/${songId}`).once('value').then((snap) => snap.val())

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
  db.ref(`games/${gameId}/teams`)

export const resetTeams = (gameId, teams) =>
  db.ref().child(`games/${gameId}`)
    .update({teams})

export const updatePoints = (gameId, team, points) =>
  db.ref().child(`games/${gameId}/teams/${team}`)
    .update({points})

// Cards

export const openCard = async (gameId, cardId) => {
  await db.ref(`games/${gameId}/cards/${cardId}`).update({'isOpen': true})
  // If this is the first opened card of the lyrics, set red cards also
  const cardStatuses = await getCardStatuses(gameId)
  const openCards = cardStatuses.filter(status => status.isOpen)
  if (openCards.length === 1) {
    setRedCards(gameId)
  }
}

export const getCardStatusesRef = gameId =>
  db.ref(`games/${gameId}/cards`)

export const getCardStatuses = gameId =>
  db.ref(`games/${gameId}/cards`).once('value').then((snap) => snap.val())

export const setRedCards = async (gameId) => {
  const cardStatuses = await getCardStatuses(gameId)
  const lyricsCount = Object.keys(cardStatuses).length
  const redCards = getRedCards(lyricsCount, cardStatuses.map(status => status.isOpen).indexOf(true))
  const updatedCardStatuses = Object.keys(cardStatuses).map((id) => ({'isOpen': cardStatuses[id].isOpen, 'isRed': redCards.includes(id)}))

  db.ref(`games/${gameId}`).update({cards: updatedCardStatuses})
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
  const gameRef = db.ref(`games/${gameId}`)
  // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
  const gameMaster = gameRef.child('gameMastersOnline').push()
  // When I disconnect, remove this device
  gameMaster.onDisconnect().remove()
  // Add this device to my connections list
  gameMaster.set(true)
}

export const getGameMastersOnlineCount = gameId =>
  db.ref(`games/${gameId}/gameMastersOnline`).once('value').then((snap) => snap.val() ? Object.keys(snap.val()).length : 0)

export const getGameMastersOnlineRef = gameId => db.ref(`games/${gameId}/gameMastersOnline`)
