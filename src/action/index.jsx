import { auth } from '../lib/firebase'
import { SET_USER } from './actionType'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

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

export function SignUpWthEmail(email, password) {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User Registered: ', userCredential.user)
        return 'success'
      })
      .catch((error) => {
        console.error('SignUp error: ', error.code, error.message)

        alert(error.message)
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
