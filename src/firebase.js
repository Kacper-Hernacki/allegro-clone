import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBbXVR9D0b8x_gOsYiovj0yFSSfRZopKa8',
  authDomain: 'allegro-clone-bc495.firebaseapp.com',
  databaseURL: 'https://allegro-clone-bc495.firebaseio.com',
  projectId: 'allegro-clone-bc495',
  storageBucket: 'allegro-clone-bc495.appspot.com',
  messagingSenderId: '18707238689',
  appId: '1:18707238689:web:17984a77148644e4a6b860',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider, firebase };
