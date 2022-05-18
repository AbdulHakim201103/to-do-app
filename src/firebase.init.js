// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9kpsJp1UDVLX6iN_nH2sH7G-HVBDTh24",
  authDomain: "to-do-app-8f4a4.firebaseapp.com",
  projectId: "to-do-app-8f4a4",
  storageBucket: "to-do-app-8f4a4.appspot.com",
  messagingSenderId: "589421880797",
  appId: "1:589421880797:web:0d65c5cd1c9c6f3a5e8234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;