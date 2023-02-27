import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// ADD FIREBASE CONFIGURATION HERE
const firebaseConfig = {
  apiKey: REACT_API_KEY,
  authDomain: REACT_AUTH_DOMAIN,
  projectId: REACT_PROJECT_ID,
  storageBucket: REACT_STORAGE_BUCKET,
  messagingSenderId: REACT_MESSAGE_SENDER_ID,
  appId: REACT_APP_ID 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}