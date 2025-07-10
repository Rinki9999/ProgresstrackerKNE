// Firebase Config (add your real keys)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com"
};
firebase.initializeApp(firebaseConfig);

// Toggle background music
const toggleSoundBtn = document.getElementById("toggleSoundBtn");
const audio = document.getElementById("bgAudio");
let isPlaying = false;

toggleSoundBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    toggleSoundBtn.textContent = "🔈";
  } else {
    audio.pause();
    toggleSoundBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

// Dynamic form fields
function updateForm() {
  const role = document.getElementById("role").value;
  const dynamicFields = document.getElementById("dynamicFields");
  dynamicFields.innerHTML = "";

  if (role === "student") {
    dynamicFields.innerHTML = `
      <label for="studentName">Student Name</label>
      <input type="text" id="studentName" required>
      <label for="studentEmail">Student Email</label>
      <input type="email" id="studentEmail" required>`;
  } else if (role === "mentor") {
    dynamicFields.innerHTML = `
      <label for="mentorEmail">Mentor Email</label>
      <input type="email" id="mentorEmail" required>
      <label for="mentorPassword">Password</label>
      <input type="password" id="mentorPassword" required>`;
  } else if (role === "admin") {
    dynamicFields.innerHTML = `
      <label for="adminName">Admin Name</label>
      <input type="text" id="adminName" required>
      <label for="adminEmail">Admin Email</label>
      <input type="email" id="adminEmail" required>
      <label for="adminPassword">Password</label>
      <input type="password" id="adminPassword" required>`;
  }
}

// Form submission + email
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("role").value;
  if (!role) return alert("Please select a role.");

  const inputs = document.querySelectorAll("#loginForm input");
  for (let input of inputs) {
    if (!input.value.trim()) return alert("Please fill all fields.");
  }

  alert("Sign-in successful!");

  // Email notification (replace with your SMTP values)
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "your@email.com",
    Password: "yourpassword",
    To: 'ruchikumari24@navgurukul.org',
    From: "your@email.com",
    Subject: "New Sign-In",
    Body: `New user signed in as ${role}. Details: ${inputs[0].value}, ${inputs[1].value}`
  }).then(() => alert("Email sent to admin."));
});

// Google sign-in
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => alert("Google Sign-in Successful!"))
    .catch(error => alert("Error: " + error.message));
}

// Facebook sign-in
function signInWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => alert("Facebook Sign-in Successful!"))
    .catch(error => alert("Error: " + error.message));
}

// Create account click
document.getElementById("createAccountLink").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Create Account feature is under development.");
  // window.location.href = "signup.html"; // you can use this when ready
});
