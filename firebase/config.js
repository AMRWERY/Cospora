import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIAZAxd_zxv-WN5eQ4LNCYPw4kJxuIflY",
  authDomain: "cospora-6564c.firebaseapp.com",
  projectId: "cospora-6564c",
  storageBucket: "cospora-6564c.firebasestorage.app",
  messagingSenderId: "981189379158",
  appId: "1:981189379158:web:25bdb7966cd021b29f27f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
