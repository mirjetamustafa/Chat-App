import { auth } from '../lib/firebase'
import { SET_USER } from './actionType'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
})

export function SignInWithEmail(email, password) {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const cleanUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL || '',
          uid: user.uid,
        }
        dispatch({
          type: 'SET_USER',
          user: cleanUser,
        })
      })
      .catch((error) => {
        console.error('Login error:', error.code, error.message)
        alert(error.code)
      })
  }
}

export function SignUpWthEmail(email, password, name, photo) {
  return (dispatch) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        return updateProfile(user, {
          displayName: name,
          photoURL: photo || 'https://i.pravatar.cc/150?u=' + user.uid,
        }).then(() => {
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
        })
      })
      .catch((error) => {
        console.error('SignUp error: ', error.code, error.message)
        throw error
      })
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
