import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDB5WvMVUCGrN-LQdW2IxBo9Os3GIhS8yc",
    authDomain: "wss-website-22b8b.firebaseapp.com",
    databaseURL: "https://wss-website-22b8b.firebaseio.com",
    projectId: "wss-website-22b8b",
    storageBucket: "wss-website-22b8b.appspot.com",
    messagingSenderId: "534076691405",
    appId: "1:534076691405:web:03fd536ec35c829feaaa84",
    measurementId: "G-SZ62MRH5FX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export{projectStorage, projectFirestore,  timestamp};




































