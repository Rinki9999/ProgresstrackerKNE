// Sample student data (replace with DB call later)
const studentData = {
    name: "Rinki",
    campus: "Patna",
    Topic: "JavaScript",
    currntModule:5,
    House:"Bageshree",
    startDate: "2024-06-10",
    endDate: "2025-10-20",
    moduleProgress: 90,
    discipline: {
      culture: 8,
      behavior: 5,
      english: 10
    }
  };
  
  // Fill in student info
  document.getElementById("studentName").innerText = studentData.name;
  document.getElementById("campus").innerText = studentData.campus;
  document.getElementById("currentTopic").innerText = studentData.Topic;
  document.getElementById("timeline").innerText = `${studentData.startDate} – ${studentData.endDate}`;
  document.getElementById("currentModule").innerText = `${studentData.currntModule} `;
  document.getElementById("Housename").innerText = `${studentData.House}`

  
  // Calculate duration
  const start = new Date(studentData.startDate);
  const end = new Date(studentData.endDate);
  const diffInDays = Math.round((new Date() - start) / (1000 * 60 * 60 * 24));
  document.getElementById("moduleDuration").innerText = `${diffInDays} days`;
  
  // Set module progress
  document.getElementById("moduleProgress").style.width = `${studentData.moduleProgress}%`;
  document.getElementById("moduleProgress").innerText = `${studentData.moduleProgress}%`;
  const progressBar = document.getElementById("moduleProgress");

if (studentData.moduleProgress < 50) {
  progressBar.style.background = "linear-gradient(to right, #f44336, #e57373)"; // red shades
} else if (studentData.moduleProgress  < 80) {
  progressBar.style.background = "linear-gradient(to right, #ff9800, #ffb74d)"; // orange shades
} else {
  progressBar.style.background = "linear-gradient(to right, #4caf50, #81c784)"; // green shades
}

  
  // Discipline bars
  document.getElementById("cultureBar").style.width = `${studentData.discipline.culture * 10}%`;
  document.getElementById("cultureBar").innerText = `${studentData.discipline.culture}/10`;
  
  document.getElementById("behaviorBar").style.width = `${studentData.discipline.behavior * 10}%`;
  document.getElementById("behaviorBar").innerText = `${studentData.discipline.behavior}/10`;
  
  document.getElementById("englishBar").style.width = `${studentData.discipline.english * 10}%`;
  document.getElementById("englishBar").innerText = `${studentData.discipline.english}/10`;

  
  