import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLiFUozb2MK5ERC73EHI_rkFnQkuY62FY",
    authDomain: "hindustan-tyres-e3eec.firebaseapp.com",
    projectId: "hindustan-tyres-e3eec",
    storageBucket: "hindustan-tyres-e3eec.appspot.com",
    messagingSenderId: "810886018891",
    appId: "1:810886018891:web:61185470b5d27d37229ace",
    measurementId: "G-C3DBH2LF0V"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();