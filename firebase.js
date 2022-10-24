
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use

  import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
  
  // https://firebase.google.com/docs/web/setup#available-libraries

    



  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTTviZnt8PMN6hIqIvjQIVn_7-lePE5Us",
    authDomain: "proyectito-asylum.firebaseapp.com",
    projectId: "proyectito-asylum",
    storageBucket: "proyectito-asylum.appspot.com",
    messagingSenderId: "28469813499",
    appId: "1:28469813499:web:1151abeb606b78c24cd05e"
};

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);