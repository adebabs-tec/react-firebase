import { createContext, useContext } from 'react'
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const createUser = (user, password) => {
    return createUserWithEmailAndPassword(auth, user, password)
  }
  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
