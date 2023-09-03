// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8MLL3dfFp0-5AvzEkidxs3bLsnsdkmsE',
  authDomain: 'fir-auth-7e6b4.firebaseapp.com',
  projectId: 'fir-auth-7e6b4',
  storageBucket: 'fir-auth-7e6b4.appspot.com',
  messagingSenderId: '51286557028',
  appId: '1:51286557028:web:fcf9b1a8f2b6aa97fdfa71',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app
