import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-FX3V7e1AJK7B7MFZCouh80yNNluYVJM",
    authDomain: "vue3-4db15.firebaseapp.com",
    projectId: "vue3-4db15",
    storageBucket: "vue3-4db15.appspot.com",
    messagingSenderId: "366701202976",
    appId: "1:366701202976:web:3815b6942578f27daa7645"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;
