// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9ewPRatX8Hm5rOGXkHyisY6wHf4-WzE",
  authDomain: "connect-wave-3b943.firebaseapp.com",
  projectId: "connect-wave-3b943",
  storageBucket: "connect-wave-3b943.appspot.com",
  messagingSenderId: "433929657231",
  appId: "1:433929657231:web:624ab4bcec36d15a0789fa",
  measurementId: "G-XD8M8LYKHF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };