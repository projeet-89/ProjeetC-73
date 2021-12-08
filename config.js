import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCdfTC6rlJykmf6nyxFMDDqsablsteeEuQ",
  authDomain: "e-library-4e59f.firebaseapp.com",
  projectId: "e-library-4e59f",
  storageBucket: "e-library-4e59f.appspot.com",
  messagingSenderId: "245440056791",
  appId: "1:245440056791:web:189e3280eca687f7da0f92"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
