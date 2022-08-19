import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCFAwtKUgVLWn3G5g9HtzmFykGRtHE2aHQ",
  authDomain: "whatsapp-9fd3a.firebaseapp.com",
  projectId: "whatsapp-9fd3a",
  storageBucket: "whatsapp-9fd3a.appspot.com",
  messagingSenderId: "873411483939",
  appId: "1:873411483939:web:5d30f03d54bacee2685496",
  measurementId: "G-730J0ZC6B0"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;
  