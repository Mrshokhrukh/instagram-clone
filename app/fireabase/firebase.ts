import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwET8WFVn28MoJzbCdLXumnw72yLpssYo",
  authDomain: "instagram-clone-90c99.firebaseapp.com",
  projectId: "instagram-clone-90c99",
  storageBucket: "instagram-clone-90c99.appspot.com",
  messagingSenderId: "900425110678",
  appId: "1:900425110678:web:233a6ca85bfe99fcbb9eb7",
  measurementId: "G-LN3JVX24FW",
};


const app = !getApp.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
