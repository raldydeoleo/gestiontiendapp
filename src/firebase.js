import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZyIktTULeTg2inpswPIIijouNtovccKk",
    authDomain: "aurorabank-17a45.firebaseapp.com",
    databaseURL: "https://aurorabank-17a45-default-rtdb.firebaseio.com",
    projectId: "aurorabank-17a45",
    storageBucket: "aurorabank-17a45.appspot.com",
    messagingSenderId: "789880338215",
    appId: "1:789880338215:web:7f0232961999eff9615b02",
    measurementId: "G-ET4FMC847C"
  };

  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;