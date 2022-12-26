
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAcR_b4Ts86xAvFApJWvSPi0Y5SElCAKMY",
    authDomain: "aaaaaaa-cf7fb.firebaseapp.com",
    databaseURL: "https://aaaaaaa-cf7fb-default-rtdb.firebaseio.com",
    projectId: "aaaaaaa-cf7fb",
    storageBucket: "aaaaaaa-cf7fb.appspot.com",
    messagingSenderId: "359063899711",
    appId: "1:359063899711:web:5f9c38f945b337cd7ab28a",
    measurementId: "G-K41ZG98BEW"
  };
  
  
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
//essa função serve para escrever no localStorage e no banco de dados o nome do usuário



var campo = '';
var nome = '';


