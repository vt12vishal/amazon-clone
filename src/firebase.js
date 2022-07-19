import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAupr6r3lpFfEebiVtkBuI1PhGe3BnY44g",
  authDomain: "clone-694e6.firebaseapp.com",
  projectId: "clone-694e6",
  storageBucket: "clone-694e6.appspot.com",
  messagingSenderId: "210157845618",
  appId: "1:210157845618:web:ab0b78f68efce0076616eb",
  measurementId: "G-SZMV518PLZ"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);



const auth = firebaseApp.auth();


export {auth}; 