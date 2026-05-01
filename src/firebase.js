// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsGb6QFp21yaE6BPODorlz7fMI_RL-gwM",
  authDomain: "ralph-web-leads.firebaseapp.com",
  projectId: "ralph-web-leads",
  storageBucket: "ralph-web-leads.firebasestorage.app",
  messagingSenderId: "222767137720",
  appId: "1:222767137720:web:66612f3740c6adbfc1054d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app);
