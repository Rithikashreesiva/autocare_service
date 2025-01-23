// Screens
const landingScreen = document.getElementById("landingScreen");
const loginScreen = document.getElementById("loginScreen");
const registerScreen = document.getElementById("registerScreen");
const homeScreen = document.getElementById("homeScreen");
const profileScreen = document.getElementById("profileScreen");

// Show specific screens
function showLanding() {
  hideAll();
  landingScreen.classList.remove("hidden");
}

function showLogin() {
  hideAll();
  loginScreen.classList.remove("hidden");
}

function showRegister() {
  hideAll();
  registerScreen.classList.remove("hidden");
}

function showHome() {
  hideAll();
  homeScreen.classList.remove("hidden");
}

function showProfile() {
  hideAll();
  profileScreen.classList.remove("hidden");
}

function hideAll() {
  landingScreen.classList.add("hidden");
  loginScreen.classList.add("hidden");
  registerScreen.classList.add("hidden");
  homeScreen.classList.add("hidden");
  profileScreen.classList.add("hidden");
}

// Mock functions for form submissions
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showHome();
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showHome();
});

function logout() {
  showLanding();
}

function editProfile() {
  alert("Edit Profile functionality is not yet implemented.");
}

// Initial Setup
showLanding();
