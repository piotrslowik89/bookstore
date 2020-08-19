import firebase from "firebase";
import Rebase from "re-base";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA03QErfEoF9XnDgCzhrTJcCnx3hTz57oM",
    authDomain: "elo-bookstore.firebaseapp.com",
    databaseURL: "https://elo-bookstore.firebaseio.com",
    projectId: "elo-bookstore",
    storageBucket: "elo-bookstore.appspot.com",
    messagingSenderId: "43081966867",
    appId: "1:43081966867:web:4b1921c7eae4f87a8e26e6",
    measurementId: "G-C4LQFWXCG6",
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
