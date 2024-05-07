// JavaScript code with logout functionality
const logoutButton = document.querySelector('.nav-link[onclick="logout()"]'); // Corrected selector

// Function to log out
function logout() {
  // Perform logout actions (e.g., clearing session, redirecting)
  // For this example, we will redirect to index.html
  window.location.href = 'index.html';
}

// Add a click event listener to the log out button
logoutButton.addEventListener('click', function(event) {
  logout(); // Log out when the button is clicked
});

// BMI calculation functionality (if needed)
const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)
  height = height / 100;
  let BMI = weight / (height * height);
  BMI = BMI.toFixed(1);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";
  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }
  document.querySelector("#commentText").innerHTML = status; // Corrected selector
});
