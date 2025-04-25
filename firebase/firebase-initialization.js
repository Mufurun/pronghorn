/*
##############################
##############################
##  Firebase iitialization  ##
##############################
##############################

I just copy and past them here. 
  may want to put them in a separate file
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzWuvmEKysIWChuS4ktZHsOuuknv2fuOU",
  authDomain: "pronghorn-5f357.firebaseapp.com",
  projectId: "pronghorn-5f357",
  databaseURL: "https://pronghorn-5f357-default-rtdb.firebaseio.com/",
  storageBucket: "pronghorn-5f357.firebasestorage.app",
  messagingSenderId: "10063193837",
  appId: "1:10063193837:web:e513d28105eb8b41a80ee4",
  measurementId: "G-M7FMSS1P71"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
console.log(db);
console.log("Firebase initialized ✅");

export { db };