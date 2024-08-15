// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMh-k3rp4NDqL2Ee1fhkC1nCz-Il7RRIk",
  authDomain: "realtor-clone-react-1d593.firebaseapp.com",
  projectId: "realtor-clone-react-1d593",
  storageBucket: "realtor-clone-react-1d593.appspot.com",
  messagingSenderId: "615031792734",
  appId: "1:615031792734:web:12d2c78f2401b3ebaf40cf",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
