import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwGitZ1hQaebCj916B1E-Zd4N5FsziVWU",
  authDomain: "web-authentication-d4812.firebaseapp.com",
  projectId: "web-authentication-d4812",
  storageBucket: "web-authentication-d4812.firebasestorage.app",
  messagingSenderId: "331680844681",
  appId: "1:331680844681:web:20e7fb6d61fe3e7e4eef58",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
