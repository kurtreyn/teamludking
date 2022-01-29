import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyBEf5YvWyLqWqyy4W4yHu91wOaQSXlHGBQ',
  authDomain: 'lodev-34909.firebaseapp.com',
  projectId: 'lodev-34909',
  storageBucket: 'lodev-34909.appspot.com',
  messagingSenderId: '132757129483',
  appId: '1:132757129483:web:67a1a482d65050c4697a0e',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
