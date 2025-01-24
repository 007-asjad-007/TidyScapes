// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVtopK2EQUOz5bXTulgbhjitCshOJGJ3A",
  authDomain: "tidyscapes-6ff90.firebaseapp.com",
  databaseURL: "https://tidyscapes-6ff90-default-rtdb.firebaseio.com",
  projectId: "tidyscapes-6ff90",
  storageBucket: "tidyscapes-6ff90.appspot.com",
  messagingSenderId: "765887611698",
  appId: "1:765887611698:web:e0863ee181b7a0d995cd2b",
  measurementId: "G-1RGJ5M1BER",
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
          window.location.href ="admin-panel.html"
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
