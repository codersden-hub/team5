// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2faEELpcjBV8-oUW-m-m4mj1gScuEF1w",
  authDomain: "coders-blog-3d263.firebaseapp.com",
  projectId: "coders-blog-3d263",
  storageBucket: "coders-blog-3d263.appspot.com",
  messagingSenderId: "257224230242",
  appId: "1:257224230242:web:355e56f0a5c8d5091b983b",
  measurementId: "G-J84YNZHKJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;