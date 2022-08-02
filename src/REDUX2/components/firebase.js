import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCUgGgyivUBEu36eJJPITHM8t3jqccUK0U",
  authDomain: "todo-auth-b426f.firebaseapp.com",
  projectId: "todo-auth-b426f",
  storageBucket: "todo-auth-b426f.appspot.com",
  messagingSenderId: "927417063823",
  appId: "1:927417063823:web:55558e419f8d7fc54c13fa",
  measurementId: "G-E7FQW2791V"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);