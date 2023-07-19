import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error: any) {
    let errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const logoutFirebase = async () => {
  try {
    signOut(FirebaseAuth)
  } catch (error) {
    return console.log(error)
  }
}