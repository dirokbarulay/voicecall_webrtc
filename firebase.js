// Firestore'u başlatma
const { initializeApp } = require("firebase/app");
// Koleksiyon ve Belgeleri Alma
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAUesDUcgX8JKDvboFdcaN6j9ki5zwZ4QM",
    authDomain: "flask-chats.firebaseapp.com",
    databaseURL: "https://flask-chats-default-rtdb.firebaseio.com",
    projectId: "flask-chats",
    storageBucket: "flask-chats.firebasestorage.app",
    messagingSenderId: "276919289662",
    appId: "1:276919289662:web:5ec0484a643104d4648e6f",
    measurementId: "G-5PHTF493L3",
}

// firebaseConfig ile firebase uygulamasını açma
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = { db, collection, getDocs };