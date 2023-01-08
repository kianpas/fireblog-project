import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUKTNbd5VUJhXm0q1-8_c1ybw3vJmWIHg",
  authDomain: "fir-blog-c92b4.firebaseapp.com",
  projectId: "fir-blog-c92b4",
  storageBucket: "fir-blog-c92b4.appspot.com",
  messagingSenderId: "1058076150859",
  appId: "1:1058076150859:web:005e8ba3a856b41eb1d1ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const firestore = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { firestore, auth, timestamp };
