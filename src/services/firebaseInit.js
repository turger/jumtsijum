import {initializeApp, getApps, getApp} from '@firebase/app'
import {getDatabase} from '@firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
}

const getFirebaseApp = () =>
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const db = getDatabase(getFirebaseApp())

export const getFirebaseDB = () => db
