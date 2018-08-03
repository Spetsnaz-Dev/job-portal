import React from 'react';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCNh7o2RW_JWfqxdAiIO-Bl97Gu-NRSop0",
    authDomain: "react-job-portal.firebaseapp.com",
    databaseURL: "https://react-job-portal.firebaseio.com",
    projectId: "react-job-portal",
    storageBucket: "react-job-portal.appspot.com",
    messagingSenderId: "1077751563837"
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider , database as default };