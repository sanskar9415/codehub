// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtaXjrjQQ11VxTTC6huqBQztouSPdWmk",
  authDomain: "codehub-b31af.firebaseapp.com",
  projectId: "codehub-b31af",
  storageBucket: "codehub-b31af.appspot.com",
  messagingSenderId: "27664866960",
  appId: "1:27664866960:web:46a03900ead2dd41594215",
  measurementId: "G-LY1EDZ4KP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
