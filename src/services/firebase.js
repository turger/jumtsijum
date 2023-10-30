import firebase from 'firebase/app'
import 'firebase/database'
import _ from 'lodash'
import { getRandomSong } from '../utils/utils'
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

const fb = firebase.initializeApp(config)
var db = fb.database()

// Game

export const getOneGame = gameId =>
  db.ref(`games/${gameId}`).once('value').then((snap) => snap.val())

export const getAllGames = () =>
  db.ref('games').once('value').then((snap) => snap.val())

export const updateGame = async (gameId, currentSongIndex, lyrics, songIdList, gameName) => {
  const lyricsCount = Object.keys(lyrics).length
  const redCards = getRedCards(lyricsCount)
  const cardStatuses = Object.keys(lyrics).map((id) => ({ 'isOpen': false, 'isRed': redCards.includes(id) }))
  await db.ref(`games/${gameId}`).update({
    gameId,
    currentSongIndex,
    songIdList,
    gameName,
    updated: Date.now(),
    teams: {
      red: {
        points: 0,
      },
      blue: {
        points: 0,
      }
    },
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

export const resetSongArchive = async (gameId) => {
  await db.ref(`games/${gameId}/songArchive`).remove()
  await setNewSong(gameId)
}

export const setNewSong = async (gameId) => {
  const game = await getOneGame(gameId)
  const { songIdList, songArchive, currentSongIndex } = game
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
  const lyricsCount = Object.keys(lyrics).length
  const redCards = getRedCards(lyricsCount)

  archiveRef.push(newCurrentSongIndex)
  currentSongIndexRef.set(newCurrentSongIndex)
  cardsRef.set(Object.keys(lyrics).map((id) => ({ 'isOpen': false, 'isRed': redCards.includes(id) })))
}

export const updateSong = (songId, song) => {
  db.ref(`songs/${songId}`).update({ songId, ...song })
}

export const setInitialSongs = () => {
  const updates = {}
  songList.forEach(song => {
    if (!song.question) song.question = ''
    if (!song.answer) song.answer = ''
    const songId = rnd.generate(4).toUpperCase()
    updates[`songs/${songId}`] = { songId, ...song }
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

// Teams

export const getTeamsRef = gameId =>
  db.ref(`games/${gameId}/teams`)

// Cards

export const openCard = (gameId, cardId) => {
  db.ref(`games/${gameId}/cards/${cardId}`).update({ 'isOpen': true })
}

export const getCardStatusesRef = gameId =>
  db.ref(`games/${gameId}/cards`)

export const getCardStatuses = gameId =>
  db.ref(`games/${gameId}/cards`).once('value').then((snap) => snap.val())

const getRedCards = (lyricsCount) => {
  const getRedCardId = () => Math.floor(Math.random() * lyricsCount).toString()
  // Possibility for two red cards if there's more than five cards in lyrics
  const moreRed = Math.random() < 0.7
  return lyricsCount > 5 && moreRed ? [getRedCardId(), getRedCardId()] : [getRedCardId()]
}

// Points

export const updatePoints = (gameId, team, points) =>
  db.ref().child(`games/${gameId}/teams/${team}`)
    .update({ points })

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
