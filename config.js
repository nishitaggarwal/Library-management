import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA_LA6MytYzOrPOJuyOlCwBhNJbvD7UEf8",
  authDomain: "library-management-app-c1216.firebaseapp.com",
  databaseURL: "https://library-management-app-c1216.firebaseio.com",
  projectId: "library-management-app-c1216",
  storageBucket: "library-management-app-c1216.appspot.com",
  messagingSenderId: "327149322940",
  appId: "1:327149322940:web:54f9cd19e12062e0b3c6b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();