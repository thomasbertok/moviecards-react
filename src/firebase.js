import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { redirect } from 'react-router-dom';


import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth()
// export const firestore = getFirestore(firebaseApp)


// sign in with firebase
export const firebaseSignIn = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user
        console.log('>>> User data: ', user)
        return true
    } catch (error) {
        console.error(error.message)
        return { error: error.message }
    }
}


// sign out with firebase
export const firebaseSignOut = async () => {

    console.log('>>> Firebase Sign Out...')
    try {
        // firebase sign out
        await signOut(auth)
        console.log('>>> Signed out. User is:', auth.currentUser)

        // react router redirect
        window.location = '/'

    } catch (error) {
        console.error(error.message)
        return { error: error.message }
    }
}

export default firebaseApp
