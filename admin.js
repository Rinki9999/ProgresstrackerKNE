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


