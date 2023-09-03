import { createContext, useContext } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'

const userContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const createUser = (user, password) => {
    return createUserWithEmailAndPassword(auth, user, password)
  }
  return (
    <userContext.Provider value={createUser}>{children}</userContext.Provider>
  )
}

export const userAuth = () => {
  return useContext(userContext)
}
