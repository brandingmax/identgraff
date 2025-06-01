// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLwZGVooMm2NXCpvlCUob26XA2Taj3gUs",
  authDomain: "identgraff-6afc7.firebaseapp.com",
  projectId: "identgraff-6afc7",
  storageBucket: "identgraff-6afc7.appspot.com",
  messagingSenderId: "424099194282",
  appId: "1:424099194282:web:2ee58f1452cdd4f5e937d3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
