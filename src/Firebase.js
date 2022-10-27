import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhlAUXwW2TISbJjYQixWkKWnNyZuKc_50",
  authDomain: "socially-a96ed.firebaseapp.com",
  projectId: "socially-a96ed",
  storageBucket: "socially-a96ed.appspot.com",
  messagingSenderId: "566911313734",
  appId: "1:566911313734:web:987bcd376b421978b22747",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };