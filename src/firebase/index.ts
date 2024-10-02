import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBGk7OMgZ7Xm7DkQLuGRDQ7vN6rmS02FYA',
  authDomain: 'learnlingo-fa9d4.firebaseapp.com',
  projectId: 'learnlingo-fa9d4',
  storageBucket: 'learnlingo-fa9d4.appspot.com',
  messagingSenderId: '830034839836',
  appId: '1:830034839836:web:bbaebcc88f799205cd12d9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
