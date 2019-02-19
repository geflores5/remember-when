import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDvjMGmZCN66usnD84SdD8EEdKttbEniFk",
  authDomain: "remember-when-5gyebb.firebaseapp.com",
  databaseURL: "https://remember-when-5gyebb.firebaseio.com",
  projectId: "remember-when-5gyebb",
  storageBucket: "remember-when-5gyebb.appspot.com",
  messagingSenderId: "1028683041485"
};

firebase.initializeApp(config);
const storage = firebase.storage();
firebase.firestore().settings({ timestampsInSnapshots: true });

export {
  storage, firebase as default
}