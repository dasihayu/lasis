// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBK2A--fVMgOZ3Eh3JANV9dFxWR_cwn44E',
  authDomain: 'lapaksiswa-1dbf5.firebaseapp.com',
  databaseURL: 'https://lapaksiswa-1dbf5-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'lapaksiswa-1dbf5',
  storageBucket: 'lapaksiswa-1dbf5.appspot.com',
  messagingSenderId: '435863796587',
  appId: '1:435863796587:web:02ffb6bb37e4844e88ea2e',
  measurementId: 'G-TNZESLHQ94',
};

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
