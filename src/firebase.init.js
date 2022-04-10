// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZBO5Fx9GRXchV7cVM7ZaSTr0Lw7ilX8Q",
  authDomain: "ema-john-2022-94c81.firebaseapp.com",
  projectId: "ema-john-2022-94c81",
  storageBucket: "ema-john-2022-94c81.appspot.com",
  messagingSenderId: "52512322805",
  appId: "1:52512322805:web:a6246d2361e690b1e581bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;