// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6JijxSw3yHaozJzu2LL2ZCMO7w6xek4M",
  authDomain: "toys-world-aa3b0.firebaseapp.com",
  projectId: "toys-world-aa3b0",
  storageBucket: "toys-world-aa3b0.appspot.com",
  messagingSenderId: "809311638480",
  appId: "1:809311638480:web:1bce2b67d86d6ac2189fd5",
};
/* 


/* 

 apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,


*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
