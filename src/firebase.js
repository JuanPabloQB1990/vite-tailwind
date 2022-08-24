
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAd_VXiFVHUKOlnNdTmJ8eoDB5fbHm02sU",
  authDomain: "crud-1ddfe.firebaseapp.com",
  databaseURL: "https://crud-1ddfe-default-rtdb.firebaseio.com",
  projectId: "crud-1ddfe",
  storageBucket: "crud-1ddfe.appspot.com",
  messagingSenderId: "659413915776",
  appId: "1:659413915776:web:c86bd889650b062070ae65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}