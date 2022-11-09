import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAByRjm4km8yJ3JV46c73s19fHQLNfPriU",
    authDomain: "musixon-d72c7.firebaseapp.com",
    projectId: "musixon-d72c7",
    storageBucket: "musixon-d72c7.appspot.com",
    messagingSenderId: "768352625561",
    appId: "1:768352625561:web:540b3ba934657359bf6908",
    measurementId: "G-HF9ENSBG4P"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
