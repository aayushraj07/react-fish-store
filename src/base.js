import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZGvRYB5C0kbtoHIKiKTTqC533RgserA4",
  authDomain: "catch-of-the-day-aayush-raj.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-aayush-raj.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebase };

//This is a default export
export default base;
