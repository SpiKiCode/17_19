// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDRlqFbeC22jOc4U_4DPNnad5pTRxRhauw",
    authDomain: "sait4e-d4b86.firebaseapp.com",
    projectId: "sait4e-d4b86",
    storageBucket: "sait4e-d4b86.appspot.com",
    messagingSenderId: "551226788126",
    appId: "1:551226788126:web:71d7567c8067d953e4a10f"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Initialize variables
  const auth = firebase.auth();
  const database = firebase.database();
  
  // Set up register function
  function register() {
    // Get all input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate input fields
    if (validate_email(email) === false || validate_password(password) === false) {
        alert('Email or Password is invalid!');
        return;
    }
  
    // Proceed with registration
    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            // Declare user variable
            const user = auth.currentUser;
  
            // Add user to Firebase Database
            const database_ref = database.ref();
  
            // Create user data
            const user_data = {
                email: email,
                last_login: Date.now()
            };
  
            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data);
  
            // Registration successful
            alert('User created successfully!');
        })
        .catch(function(error) {
            // Firebase error handling
            const error_message = error.message;
            alert(error_message);
        });
  }
  
  // Set up login function
  function login() {
    // Get input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate input fields
    if (validate_email(email) === false || validate_password(password) === false) {
        alert('Email or Password is invalid!');
        return;
    }
  
    // Proceed with login
    auth.signInWithEmailAndPassword(email, password)
        .then(function() {
            // Declare user variable
            const user = auth.currentUser;
  
            // Update last login time in Firebase Database
            const database_ref = database.ref();
            const user_data = {
                last_login: Date.now()
            };
            database_ref.child('users/' + user.uid).update(user_data);
  
            // Redirect to login.html (replace with your desired page)
            window.location.href = 'login.html';
        })
        .catch(function(error) {
            // Firebase error handling
            const error_message = error.message;
            alert(error_message);
        });
  }
  
  // Validate email function
  function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(String(email).toLowerCase());
  }
  
  // Validate password function
  function validate_password(password) {
    return password.length >= 6; // Firebase requires password length >= 6
  }
  
  // Validate field function
  function validate_field(field) {
    return field.trim() !== ''; // Check if field is not empty
  }
  