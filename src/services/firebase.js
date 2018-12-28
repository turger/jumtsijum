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

export const getGameData = (gameId) =>
  fb.database().ref(`games/${gameId}`).once('value').then((snap) => snap.val())

export const getSongArchive = (gameId) =>
  fb.database().ref(`games/${gameId}/songArchive`).once('value').then((snap) => snap.val())



export const addNewGame = (gameId, song, lyrics) =>
  fb.database().ref(`games/${gameId}`).set({
    currentSong: song,
    teams: {
      red: {
        points: 0,
        turn: false
      },
      blue: {
        points: 0,
        turn: true
      }
    },
    cards: Object.keys(lyrics).map(id => ({'isOpen': false}))
  })

export const openCard = (gameId, cardId) => {
  fb.database().ref(`games/${gameId}/cards/${cardId}`).update({'isOpen': true})
}

export const getCardStatusesRef = gameId =>
  fb.database().ref(`games/${gameId}/cards`)

export const setCurrentSong = (gameId, newCurrentSong) => {
  const currentSongRef = fb.database().ref(`games/${gameId}/currentSong`)
  const archiveRef = fb.database().ref(`games/${gameId}/archive`)

  currentSongRef.on('value', function(snap) {
    const currentSong = snap.val()
    console.log(currentSong)

    archiveRef.update({[currentSong]: currentSong})
    currentSongRef.set(newCurrentSong)
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.code)
  })
}

export const addPoints = (gameId, team, points) =>
  fb.database().ref().child(`games/${gameId}/teams/${team}`)
    .update({ points })

export const switchTurn = (gameId, team) => {
  const updates = {}
  updates[`games/${gameId}/teams/red/turn`] = team === 'red'
  updates[`games/${gameId}/teams/blue/turn`] = team === 'blue'
  return fb.database().ref().update(updates)
}

export const addGameMasterViewer = gameId => {
  const gameRef = fb.database().ref(`games/${gameId}`)
  // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
  const gameMaster = gameRef.child('gameMastersOnline').push()
  // When I disconnect, remove this device
  gameMaster.onDisconnect().remove()
  // Add this device to my connections list
  gameMaster.set(true)
}

export const getGameMastersOnlineCount = gameId =>
  fb.database().ref(`games/${gameId}/gameMastersOnline`).once('value').then((snap) => Object.keys(snap.val()).length)

export const getGameMastersOnlineRef = gameId => fb.database().ref(`games/${gameId}/gameMastersOnline`)