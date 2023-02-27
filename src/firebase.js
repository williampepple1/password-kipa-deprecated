import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from 'firebase/auth';
// ADD FIREBASE CONFIGURATION HERE
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  appId: import.meta.env.VITE_REACT_APP_ID,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);


export {db, auth}