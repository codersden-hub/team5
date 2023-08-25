// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqG3AlZDmQv0CiWIY-hD9j6MFQsaBE3IM",
  authDomain: "coder-s-den-blog.firebaseapp.com",
  projectId: "coder-s-den-blog",
  storageBucket: "coder-s-den-blog.appspot.com",
  messagingSenderId: "106443296126",
  appId: "1:106443296126:web:8eea51d5aa9af64a5f372f",
  measurementId: "G-65BPQYH8DS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;