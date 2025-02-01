// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaSvqojxACumpR20vmnC_7yhuYakuE3pM",
  authDomain: "tidy-scapes.firebaseapp.com",
  projectId: "tidy-scapes",
  storageBucket: "tidy-scapes.firebasestorage.app",
  messagingSenderId: "965946993878",
  appId: "1:965946993878:web:9c2f8b6efdf29f49156d77",
  measurementId: "G-1HN63BH8Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Handle submit button click
document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("submit");

  if (submit) {
    submit.addEventListener("click", function (event) {
      event.preventDefault();

      // Get input values
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Firebase Authentication
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          alert("Signed up successfully!");
          window.location.href ="AdMiN_PaNeL.html"
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error: ${errorMessage}`);
        });
    });
  } else {
    console.error("Submit button not found.");
  }
});
