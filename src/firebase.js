import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2nfwiuuWz9QIDylJhNnuhVWnZYCXeMNU",
  authDomain: "clone-366fc.firebaseapp.com",
  projectId: "clone-366fc",
  storageBucket: "clone-366fc.appspot.com",
  messagingSenderId: "248126843340",
  appId: "1:248126843340:web:02dfdb6fc6d054078cd569",
  measurementId: "G-P9KKL54869",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
