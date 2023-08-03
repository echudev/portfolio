import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { FirebaseAuth } from '../config'

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
const githubProvider = new GithubAuthProvider()
githubProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    return result
  } 
  catch (error) { 
    console.log('no fue posible loguearse por el siguiente error: ' + error)
  }
}

export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, githubProvider)
    return result
  } 
  catch (error) { 
      console.log('no fue posible loguearse por el siguiente error: ' + error)
  }
}

export const logoutFirebase = async () => {
  try {
    signOut(FirebaseAuth)
  } catch (error) {
    return console.log(error)
  }
}