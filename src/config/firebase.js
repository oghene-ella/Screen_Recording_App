import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "screenrecord-46186.firebaseapp.com",
    projectId: "screenrecord-46186",
    storageBucket: "screenrecord-46186.appspot.com",
    messagingSenderId: "976255013482",
    appId: "1:976255013482:web:9935fb77e3b482987e3013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { auth, googleProvider };