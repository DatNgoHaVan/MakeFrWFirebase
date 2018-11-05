
  var functions = require('firebase-functions');
  const admin = require('firebase-admin');
  admin.initializeApp(functions.config().firebase);
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvukwTRa5kbRxZENjd5J46_PwALpcryUo",
    authDomain: "test-50a0b.firebaseapp.com",
    databaseURL: "https://test-50a0b.firebaseio.com",
    projectId: "test-50a0b",
    storageBucket: "test-50a0b.appspot.com",
    messagingSenderId: "1002346447366"
  };
  firebase.initializeApp(config);
