import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getGravatar } from "./helpers";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// the DB
export const database = getDatabase(firebaseApp);

export const auth = getAuth();

// sign in with firebase
export const firebaseSignIn = async ({ email, password }) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
    //console.log(">>> Firebase: Successful signin. \nUser data: ", user);
    return user;
  } catch (error) {
    console.error(error.message);
    return { error: error.message };
  }
};

// signup
export const firebaseSignUp = async (email, password, username) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;

    if (user) {
      updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: getGravatar(email),
      });
      console.log(">>> Firebase: Successful signUp. \nUser data: ", user);
      return true;
    } else {
      console.error("!!! User registration error");
    }
  } catch (error) {
    console.error(error.message);
    return { error: error.message };
  }
};

// sign out with firebase
export const firebaseSignOut = async () => {
  console.log(">>> Firebase Sign Out...");

  try {
    // firebase sign out
    await signOut(auth);
    console.log(">>> Logged out. User is:", auth.currentUser);
    // navigation is done by the AuthProvider

    // empty local storage
    localStorage.removeItem("moviecards-movies-database");
    // empty user context

    return true;
  } catch (error) {
    console.error(error.message);
    return { error: error.message };
  }
};

export default firebaseApp;
