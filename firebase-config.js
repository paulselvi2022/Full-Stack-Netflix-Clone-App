
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-tgbS3Y3omdOaBQDAJD4dwvJ4w1l6_XI",
  authDomain: "react-netflix-clone-65776.firebaseapp.com",
  projectId: "react-netflix-clone-65776",
  storageBucket: "react-netflix-clone-65776.appspot.com",
  messagingSenderId: "803153870593",
  appId: "1:803153870593:web:d1108d7c3f4eab22476500",
  measurementId: "G-N2427MBFRS"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
