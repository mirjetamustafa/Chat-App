import db, { auth } from '../lib/firebase'
import { SET_USER } from './actionType'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
})

// export function SignInWithEmail(email, password) {
//   return (dispatch) => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user
//         const cleanUser = {
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL || '',
//           uid: user.uid,
//         }
//         dispatch({
//           type: 'SET_USER',
//           user: cleanUser,
//         })
//       })
//       .catch((error) => {
//         console.error('Login error:', error.code, error.message)
//         alert(error.code)
//       })
//   }
// }

export function SignInWithEmail(email, password, name, photo) {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      // let firestoreData = {}
      if (docSnap.exists()) {
        //firestoreData = docSnap.data()
        await updateDoc(docRef, {
          lastLogin: serverTimestamp(),
        })
      } else {
        await setDoc(docRef, {
          name: user.displayName || '',
          email: user.email,
          photo: user.photoURL || '',
          uid: user.uid,
          lastLogin: serverTimestamp(),
        })
      }

      const firestoreData = (await getDoc(docRef)).data()

      const cleanUser = {
        name: user.displayName || firestoreData.name || '',
        email: user.email,
        photo: user.photoURL || firestoreData.photo || '',
        uid: user.uid,
        ...firestoreData,
      }

      dispatch({
        type: 'SET_USER',
        user: cleanUser,
      })
    } catch (error) {
      console.log('Login error:', error)
      alert(error.message)
    }
  }
}

// export function SignUpWthEmail(email, password, name, photo) {
//   return (dispatch) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user

//         return updateProfile(user, {
//           displayName: name,
//           photoURL: photo || 'https://i.pravatar.cc/150?u=' + user.uid,
//         }).then(() => {
//           const cleanUser = {
//             name: user.displayName,
//             email: user.email,
//             photo: user.photoURL,
//             uid: user.uid,
//           }

//           dispatch({
//             type: SET_USER,
//             user: cleanUser,
//           })

//           return 'success'
//         })
//       })
//       .catch((error) => {
//         console.error('SignUp error: ', error.code, error.message)
//         throw error
//       })
//   }
// }

export function SignUpWthEmail(email, password, name, photo) {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      await updateProfile(user, {
        displayName: name,
        photoURL: photo || 'https://i.pravatar.cc/150?u=' + user.uid,
      })

      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        photo: photo || 'https://i.pravatar.cc/150?u=' + user.uid,
        uid: user.uid,
        createAt: new Date(),
      })

      const cleanUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      }
      dispatch({
        type: SET_USER,
        user: cleanUser,
      })
      return 'success'
    } catch (error) {
      console.log('SignUp error:', error.code, error.message)
      throw error
    }
  }
}

export function SignOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null))
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
}
