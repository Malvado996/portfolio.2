import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAatiHdEn-NY2dJ5jxDYYE9uuJDvDAwqnY",
    authDomain: "portfolio-7eaac.firebaseapp.com",
    projectId: "portfolio-7eaac",
    storageBucket: "portfolio-7eaac.appspot.com",
    messagingSenderId: "169317606836",
    appId: "1:169317606836:web:934cc159e92039cf8c3ee1",
    measurementId: "G-LHJ6Q3DXTJ"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;