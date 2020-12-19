import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhFmiKatjPqfltcFa4xgNTxHoFVWn4-bk",
  authDomain: "twitter-clone-56703.firebaseapp.com",
  projectId: "twitter-clone-56703",
  storageBucket: "twitter-clone-56703.appspot.com",
  messagingSenderId: "260544390675",
  appId: "1:260544390675:web:0670f6fc9736651ac301e6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
