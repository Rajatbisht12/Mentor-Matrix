import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API key
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = getAuth(app); // Get auth instance

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email); // Access user data (e.g., email)
    // Perform actions based on logged-in user
  } else {
    console.log("No user logged in");
  }
});

export { auth };
