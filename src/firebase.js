import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUR4gjQSN_00zt3yo_exny47SVtlyY3uc",
  authDomain: "fir-basics-3d85b.firebaseapp.com",
  projectId: "fir-basics-3d85b",
  storageBucket: "fir-basics-3d85b.appspot.com",
  messagingSenderId: "1096141445203",
  appId: "1:1096141445203:web:bbde6cf3c1c3ad349d0ea6",
  measurementId: "G-SEPBW6NV38"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


