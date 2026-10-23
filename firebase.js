
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3mWMWtc_J-HyAlzWYP9FiGo0MUshrMSo",
  authDomain: "website-kelas-ca051.firebaseapp.com",
  projectId: "website-kelas-ca051",
  storageBucket: "website-kelas-ca051.firebasestorage.app",
  messagingSenderId: "1084606053674",
  appId: "1:1084606053674:web:4df9c801d73027e3767253",
  measurementId: "G-ZRP0S6MN4E"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

