import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAzdh6GoejY7FO2V5_Cgtv2tjHOeLXJzSM",
  authDomain: "disneyplus-clone-b3f11.firebaseapp.com",
  projectId: "disneyplus-clone-b3f11",
  storageBucket: "disneyplus-clone-b3f11.appspot.com",
  messagingSenderId: "7199402034",
  appId: "1:7199402034:web:9c686962b87dc40102342b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;