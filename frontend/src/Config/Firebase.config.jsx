import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDc4Hxfr5X2oTYW4IUzfHPW-f1q3qS8b4w",
      authDomain: "petcare-fbcf2.firebaseapp.com",
      projectId: "petcare-fbcf2",
      storageBucket: "petcare-fbcf2.firebasestorage.app",
      messagingSenderId: "140411905057",
      appId: "1:140411905057:web:5f0fb11b7c3b23ea032f60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;