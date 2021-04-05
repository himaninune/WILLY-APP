import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBKqGSXqektF6tgqL616J-jcIGDBgWvyVk",
  authDomain: "willi-app-8f372.firebaseapp.com",
  projectId: "willi-app-8f372",
  storageBucket: "willi-app-8f372.appspot.com",
  messagingSenderId: "130882285217",
  appId: "1:130882285217:web:5fcab55c9d3da05b1a4ae0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
