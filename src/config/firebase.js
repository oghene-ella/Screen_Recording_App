// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
// 	// apiKey: import.meta.env.VITE_API_KEY,
//     apiKey: "AIzaSyDls9ciYgRQ34I1hEwhcSkRxHKFVtJD9f0",
// 	authDomain: "screenrecord-46186.firebaseapp.com",
// 	projectId: "screenrecord-46186",
// 	storageBucket: "screenrecord-46186.appspot.com",
// 	messagingSenderId: "976255013482",
// 	appId: "1:976255013482:web:9935fb77e3b482987e3013",
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: import.meta.env.VITE_API_KEY,
    apiKey: "AIzaSyDls9ciYgRQ34I1hEwhcSkRxHKFVtJD9f0",
	authDomain: "screenrecord-46186.firebaseapp.com",
	projectId: "screenrecord-46186",
	storageBucket: "screenrecord-46186.appspot.com",
	messagingSenderId: "976255013482",
	appId: "1:976255013482:web:9935fb77e3b482987e3013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const provider = new initializeApp.auth.googleProvider;
provider.setCustomParameters({
	prompt: "select_account",
});
export const signInWithRedirect = () => auth.signInWithRedirect(provider);