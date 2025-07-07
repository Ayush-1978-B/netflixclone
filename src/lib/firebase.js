import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTOfVQkVvP_nBueYf-lufr1_kg2nRh17Y",
  authDomain: "netflixclone-e619c.firebaseapp.com",
  projectId: "netflixclone-e619c",
  storageBucket: "netflixclone-e619c.firebasestorage.app",
  messagingSenderId: "400428729899",
  appId: "1:400428729899:web:893382be3d14df7dbe8c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 