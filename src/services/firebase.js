import firebase from 'firebase/app'
import 'firebase/database'

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
// if (process.env.NODE_ENV === 'development') {
//   // Point to the RTDB emulator running on localhost.
//   db.useEmulator("localhost", 9000)
// }

export const getGameData = gameId =>
  db.ref(`games/${gameId}`).once('value').then((snap) => snap.val())

export const getTeamsRef = gameId =>
  db.ref(`games/${gameId}/teams`)

export const getCurrentSong = gameId =>
  db.ref(`games/${gameId}/currentSong`).once('value').then((snap) => snap.val())

export const getCurrentSongRef = gameId =>
  db.ref(`games/${gameId}/currentSong`)

export const getSongArchive = (gameId) =>
  db.ref(`games/${gameId}/songArchive`).once('value').then((snap) => snap.val())

export const getSongListKey = (gameId) =>
  db.ref(`games/${gameId}/songList`).once('value').then((snap) => snap.val())

export const addNewGame = (gameId, song, lyrics, songList) => {
  const lyricsCount = Object.keys(lyrics).length
  const redCard = Math.floor(Math.random() * (lyricsCount - 0) + 0).toString()
  db.ref(`games/${gameId}`).set({
    gameId: gameId,
    currentSong: song,
    songList: songList,
    teams: {
      red: {
        points: 0,
      },
      blue: {
        points: 0,
      }
    },
    cards: Object.keys(lyrics).map((id) => ({'isOpen': false, 'isRed': id === redCard}))
  })
}

export const openCard = (gameId, cardId) => {
  db.ref(`games/${gameId}/cards/${cardId}`).update({'isOpen': true})
}

export const getCardStatusesRef = gameId =>
  db.ref(`games/${gameId}/cards`)

export const getCardStatuses = gameId =>
  db.ref(`games/${gameId}/cards`).once('value').then((snap) => snap.val())

export const setNewCurrentSong = (gameId, oldCurrentSong, newCurrentSong, lyrics) => {
  const currentSongRef = db.ref(`games/${gameId}/currentSong`)
  const archiveRef = db.ref(`games/${gameId}/songArchive`)
  const cardsRef = db.ref(`games/${gameId}/cards`)
  const lyricsCount = Object.keys(lyrics).length
  const redCard = Math.floor(Math.random() * (lyricsCount - 0) + 0).toString()

  archiveRef.push(oldCurrentSong)
  currentSongRef.set(newCurrentSong)
  cardsRef.set(Object.keys(lyrics).map((id) => ({'isOpen': false, 'isRed': id === redCard})))
}

export const updatePoints = (gameId, team, points) =>
  db.ref().child(`games/${gameId}/teams/${team}`)
    .update({ points })

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
  db.ref(`games/${gameId}/gameMastersOnline`).once('value').then((snap) => Object.keys(snap.val()).length)

export const getGameMastersOnlineRef = gameId => db.ref(`games/${gameId}/gameMastersOnline`)
