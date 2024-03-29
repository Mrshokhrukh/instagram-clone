import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const db = getFirestore(app);
const storage = getStorage();

export { auth, firestore, app, db, storage };
