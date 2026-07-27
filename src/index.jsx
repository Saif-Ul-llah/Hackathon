import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD57HMCpMy-JzLqw1G27ry4XedOgSL2pOI",
  authDomain: "mine-hackathon.firebaseapp.com",
  projectId: "mine-hackathon",
  storageBucket: "mine-hackathon.appspot.com",
  messagingSenderId: "1028187912579",
  appId: "1:1028187912579:web:d47aea2bbd63e0c66a9eb6",
  measurementId: "G-1SESGKX7J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
