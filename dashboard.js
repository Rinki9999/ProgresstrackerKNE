const studentData = JSON.parse(localStorage.getItem("studentData"));

// Fill profile data
document.getElementById("studentName").innerText = studentData.name;
document.getElementById("campus").innerText = studentData.campus;
document.getElementById("currentTopic").innerText = studentData.Topic;
document.getElementById("Housename").innerText = studentData.House;
document.getElementById("timeline").innerText = `${studentData.startDate} – ${studentData.endDate}`;
document.getElementById("currentModule").innerText = studentData.currntModule;

// Duration
const start = new Date(studentData.startDate);
const today = new Date();
const days = Math.round((today - start) / (1000 * 60 * 60 * 24));
document.getElementById("moduleDuration").innerText = `${days} days`;

// Module progress
const moduleProgress = document.getElementById("moduleProgress");
moduleProgress.style.width = `${studentData.moduleProgress}%`;
moduleProgress.innerText = `${studentData.moduleProgress}%`;

if (studentData.moduleProgress < 50) {
  moduleProgress.style.background = "linear-gradient(to right, #f44336, #e57373)";
} else if (studentData.moduleProgress < 80) {
  moduleProgress.style.background = "linear-gradient(to right, #ff9800, #ffb74d)";
} else {
  moduleProgress.style.background = "linear-gradient(to right, #4caf50, #81c784)";
}

// Discipline
document.getElementById("cultureBar").style.width = `${studentData.discipline.culture * 10}%`;
document.getElementById("cultureBar").innerText = `${studentData.discipline.culture}/10`;

document.getElementById("behaviorBar").style.width = `${studentData.discipline.behavior * 10}%`;
document.getElementById("behaviorBar").innerText = `${studentData.discipline.behavior}/10`;

document.getElementById("englishBar").style.width = `${studentData.discipline.english * 10}%`;
document.getElementById("englishBar").innerText = `${studentData.discipline.english}/10`;
