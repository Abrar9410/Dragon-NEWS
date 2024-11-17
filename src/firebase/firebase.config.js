// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4diB0hJSQe17LOZpfBvXgTiNtAeZ7LtU",
    authDomain: "dragon-news-65740.firebaseapp.com",
    projectId: "dragon-news-65740",
    storageBucket: "dragon-news-65740.firebasestorage.app",
    messagingSenderId: "474801036331",
    appId: "1:474801036331:web:58f7df70cd8cf4a7169e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);