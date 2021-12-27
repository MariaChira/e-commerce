import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBGM2Xzy5_zOQZvkObXKI3htVvNObZ4eAE",
    authDomain: "e-commerce-31859.firebaseapp.com",
    projectId: "e-commerce-31859",
    storageBucket: "e-commerce-31859.appspot.com",
    messagingSenderId: "214741969671",
    appId: "1:214741969671:web:ed9c7ac3a03049f92e33a2",
    measurementId: "G-3DQ29Q2E0K"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;