import {initializeApp, getApps, getApp} from '@firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import {getDatabase} from '@firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_ID
}

const getFirebaseApp = () =>
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const db = getDatabase(getFirebaseApp())

export const getFirebaseDB = () => db

initializeAppCheck(getFirebaseApp(), {
  provider: new ReCaptchaEnterpriseProvider(process.env.REACT_APP_RECAPTCHA_KEY),
  isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
})
