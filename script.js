// Toggle music
const toggleSoundBtn = document.getElementById("toggleSoundBtn");
const audio = document.getElementById("bgAudio");
let isPlaying = false;

toggleSoundBtn.addEventListener("click", () => {
  isPlaying ? audio.pause() : audio.play();
  toggleSoundBtn.textContent = isPlaying ? "🔊" : "🔈";
  isPlaying = !isPlaying;
});

// Update form based on role
function updateForm() {
  const role = document.getElementById("role").value;
  const dynamicFields = document.getElementById("dynamicFields");
  dynamicFields.innerHTML = "";

  if (role === "student") {
    dynamicFields.innerHTML = `
      <label for="studentEmail">Enter your email</label>
      <input type="email" id="studentEmail" required />
    `;
  }
}

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  if (role !== "student") {
    alert("Only student login is supported for now.");
    return;
  }

  const email = document.getElementById("studentEmail").value.trim();
  if (!email) return alert("Please enter your email.");

})