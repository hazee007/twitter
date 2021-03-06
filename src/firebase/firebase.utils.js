import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB7PVy4er1-MWXbn5kENO_7A06pVXVU8zE',
  authDomain: 'project-twitter-97f97.firebaseapp.com',
  databaseURL: 'https://project-twitter-97f97.firebaseio.com',
  projectId: 'project-twitter-97f97',
  storageBucket: 'project-twitter-97f97.appspot.com',
  messagingSenderId: '1048127235568',
  appId: '1:1048127235568:web:db3c337e1170796a2da935',
  measurementId: 'G-J59FFG44B9',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // query firestor for userAuth document to see if it already exist
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

//Sign In function
// There is a closed issue in the firebase-js-sdk project here with some details on it. Ultimately,
// what is happening with this implantation is a timeout is getting set that throws an exception outside of the scope of the try/catch:
export async function signIn(email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCreds) => resolve(userCreds))
      .catch((reason) => reject(reason));
  });
}
export async function signupUser(email, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCreds) => resolve(userCreds))
      .catch((reason) => reject(reason));
  });
}
