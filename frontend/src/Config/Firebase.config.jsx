import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
      // apiKey: import.meta.env.VITE_APIKEY,
      // authDomain: import.meta.env.VITE_AUTHDOMAIN,
      // projectId: import.meta.env.VITE_PROJECTID,
      // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
      // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
      // appId: import.meta.env.VITE_APPID,
      apiKey: "AIzaSyA4kg0C55nfZ4ukLMtzHtvkPgaFNoio2OM",
  authDomain: "stayvista-57e83.firebaseapp.com",
  projectId: "stayvista-57e83",
  storageBucket: "stayvista-57e83.firebasestorage.app",
  messagingSenderId: "644750107645",
  appId: "1:644750107645:web:dc08e2076c6d203a046f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;