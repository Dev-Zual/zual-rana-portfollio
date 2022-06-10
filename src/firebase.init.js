// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaxxySS0jchz_S6SYlCS_bzuG92cha3YE',
  authDomain: 'zual-rana-f6323.firebaseapp.com',
  projectId: 'zual-rana-f6323',
  storageBucket: 'zual-rana-f6323.appspot.com',
  messagingSenderId: '276862424100',
  appId: '1:276862424100:web:0e5943e0f4db5ae032b4b1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
