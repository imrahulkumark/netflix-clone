import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAqQ0SP1bfZNbrlWAjmA0x_eJNBtI-3770",
    authDomain: "netflix-clone-6aaf8.firebaseapp.com",
    projectId: "netflix-clone-6aaf8",
    storageBucket: "netflix-clone-6aaf8.appspot.com",
    messagingSenderId: "251905707288",
    appId: "1:251905707288:web:f9362d307ed471708f626d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth };