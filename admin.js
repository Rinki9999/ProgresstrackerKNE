const students = [
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bageshree"
  },
  {
    name: "Rinki",
    module: "5",
    image: "images/images.jpeg",
    house: "Malhar"
  },
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bhairav"
  },
  {
    name: "Rabina",
    module: "4",
    image: "images/images.jpeg",
    house: "Malhar"
  },
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bageshree"
  },
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bhairav"
  },
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bhairav"
  },
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bhairav"
  },
  {
    name: "Muskan Kumari",
    module: "5",
    image: "images/images.jpeg",
    house: "Bhairav"
  }
];


const container = document.getElementById('student-container');

students.forEach(student => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = student.image;
  img.alt = student.name;

  const name = document.createElement('h3');
  name.textContent = student.name;

  const house = document.createElement('p');
  house.textContent = "House: " + student.house;

  const module = document.createElement('p');
  module.textContent = "Module: " + student.module;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(house);
  card.appendChild(module);

  container.appendChild(card);
});







const data = [
  {
    module: "Module 1",
    total: 15,
    houses: {
      "Red House": {
        count: 5,
        students: ["Rohan", "Amit", "Sana", "Priya", "Kabir"]
      },
      "Blue House": {
        count: 6,
        students: ["Neha", "Pooja", "Rahul", "Simran", "Vikram", "Mona"]
      },
      "Green House": {
        count: 4,
        students: ["Ali", "Sneha", "Ravi", "Tina"]
      }
    }
  },
  {
    module: "Module 2",
    total: 20,
    houses: {
      "Red House": {
        count: 7,
        students: ["Manish", "Diksha", "Rani", "Ravi", "Ritika", "Vikas", "Vani"]
      },
      "Blue House": {
        count: 8,
        students: ["Arjun", "Meena", "Preeti", "Karan", "Varun", "Sakshi", "Sohail", "Reena"]
      },
      "Green House": {
        count: 5,
        students: ["Deepa", "Tara", "Asha", "Nikhil", "Yash"]
      }
    }
  }
];

const tbody = document.getElementById("module-table-body");

data.forEach((item, index) => {
  const tr = document.createElement("tr");

  const moduleTd = document.createElement("td");
  moduleTd.textContent = item.module;

  const totalTd = document.createElement("td");
  const totalDiv = document.createElement("div");

  const totalSpan = document.createElement("span");
  totalSpan.textContent = item.total;
  totalSpan.className = "toggle";
  totalSpan.style.cursor = "pointer";
  totalSpan.onclick = () => toggleHouse(index);

  const dropdownDiv = document.createElement("div");
  dropdownDiv.className = "dropdown-content";
  dropdownDiv.id = `dropdown-${index}`;
  dropdownDiv.style.display = "none";

  // Houses
  for (const houseName in item.houses) {
    const house = item.houses[houseName];
    const houseDiv = document.createElement("div");

    const houseP = document.createElement("p");
    houseP.textContent = `${houseName}: ${house.count}`;
    houseP.style.cursor = "pointer";
    houseP.style.color = "green";

    const houseId = `house-${index}-${houseName.split(" ").join("-")}`;
    houseP.onclick = () => toggleStudents(houseId);

    const studentList = document.createElement("ul");
    studentList.id = houseId;
    studentList.style.display = "none";
    studentList.style.marginLeft = "20px";

    house.students.forEach(student => {
      const li = document.createElement("li");
      li.textContent = student;
      studentList.appendChild(li);
    });

    houseDiv.appendChild(houseP);
    houseDiv.appendChild(studentList);
    dropdownDiv.appendChild(houseDiv);
  }

  totalDiv.appendChild(totalSpan);
  totalDiv.appendChild(dropdownDiv);

  totalTd.appendChild(totalDiv);
  tr.appendChild(moduleTd);
  tr.appendChild(totalTd);
  tbody.appendChild(tr);
});

// Toggle dropdown (houses)
function toggleHouse(index) {
  const allDropdowns = document.querySelectorAll(".dropdown-content");
  allDropdowns.forEach((el, i) => {
    if (i === index) {
      el.style.display = el.style.display === "block" ? "none" : "block";
    } else {
      el.style.display = "none";
    }
  });
}

// Toggle students
function toggleStudents(houseId) {
  const ul = document.getElementById(houseId);
  ul.style.display = ul.style.display === "none" ? "block" : "none";
}



