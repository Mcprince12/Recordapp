import firebase from 'firebase';
require( '@firebase/firestore' );

const firebaseConfig = {
  apiKey: "AIzaSyD3wuP6lZ4vIdRhucL1Nxie2Ix_2n9ny18",
  authDomain: "recordapp-ba34c.firebaseapp.com",
  projectId: "recordapp-ba34c",
  storageBucket: "recordapp-ba34c.appspot.com",
  messagingSenderId: "662319883608",
  appId: "1:662319883608:web:02c10a44b4a590ce97712d"
};

firebase.initializeApp( firebaseConfig );
export default firebase.firestore();