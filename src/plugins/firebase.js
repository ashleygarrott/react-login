import firebase from "firebase/app";
import "firebase/auth";


var config = {
    apiKey: "AIzaSyC4xehaKwnOAbtZXHsEPJiFC8W_yH1AToM",
    authDomain: "to-do-2e8b2.firebaseapp.com",
    projectId: "to-do-2e8b2",
    storageBucket: "to-do-2e8b2.appspot.com",
    messagingSenderId: "682573254202",
    appId: "1:682573254202:web:63594bfeaf256bc87e6f03",
    measurementId: "G-YV1ZSBFDD2"
  };
  // Initialize Firebase

  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

   
  export default firebase;
