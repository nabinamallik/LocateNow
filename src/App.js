import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Signup from "./components/signup";
import Navbar from "./components/navbar"
import Map from "./components/map"
import Login from "./components/login"
import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyAWcatPKu8jxPrfVJWfAV4y3m61uXSSFns",
  authDomain: "locateme-939eb.firebaseapp.com",
  projectId: "locateme-939eb",
  storageBucket: "locateme-939eb.appspot.com",
  messagingSenderId: "1081775886736",
  appId: "1:1081775886736:web:cd90dfe5a763640fc42315",
  measurementId: "G-P0QKWEGJ6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const signupHandler = (userData) => {
  const { email, password } = userData;

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(email)
    console.log(password)
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
}


function App() {
  return (
    <div>
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
