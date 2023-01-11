// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBK2A--fVMgOZ3Eh3JANV9dFxWR_cwn44E",
  authDomain: "lapaksiswa-1dbf5.firebaseapp.com",
  databaseURL: "https://lapaksiswa-1dbf5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lapaksiswa-1dbf5",
  storageBucket: "lapaksiswa-1dbf5.appspot.com",
  messagingSenderId: "435863796587",
  appId: "1:435863796587:web:02ffb6bb37e4844e88ea2e",
  measurementId: "G-TNZESLHQ94"
};

firebase.initializeApp(firebaseConfig);


const btnDaftar = document.getElementById('btndaftar');



btnDaftar.addEventListener('click', () => {
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const namaDepan = document.getElementById('namadepan').value;
  const namaBelakang = document.getElementById('namabelakang').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    
    firebase.database().ref('users/' + user.uid).set({
        'nama depan': namaDepan,
        'nama belakang': namaBelakang,
        email: email,
        pass: password
      })
      
      alert('Berhasil Membuat Akun');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
})

