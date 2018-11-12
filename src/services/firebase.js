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
  fb.database().ref(`games/${gameId}`).once('value').then((snapshot) => snapshot.val())

export const getSongArchive = (gameId) =>
  fb.database().ref(`games/${gameId}/songArchive`).once('value').then((snapshot) => snapshot.val())

export const addNewGame = (gameId, song) =>
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
    }
  })

export const setCurrentSong = (gameId, newCurrentSong) => {
  const currentSongRef = fb.database().ref(`games/${gameId}/currentSong`)
  const archiveRef = fb.database().ref(`games/${gameId}/archive`)

  currentSongRef.on("value", function(snapshot) {
    const currentSong = snapshot.val()
    console.log(currentSong)

    archiveRef.update({[currentSong]: currentSong})
    currentSongRef.set(newCurrentSong)
  }, (errorObject) => {
    console.log("The read failed: " + errorObject.code)
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