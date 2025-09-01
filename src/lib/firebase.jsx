//import { initializeApp } from 'firebase/app'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDxQA5RDQ9BO5Uw7r3KoXSwZDMA-v64vVQ',
  authDomain: 'chatapp-7eeda.firebaseapp.com',
  projectId: 'chatapp-7eeda',
  storageBucket: 'chatapp-7eeda.appspot.com',
  messagingSenderId: '1085006158059',
  appId: '1:1085006158059:web:e2bf4d13ea55a33f5346ae',
}

//const app = initializeApp(firebaseConfig)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { auth, storage }
export default db
