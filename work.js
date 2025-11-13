	// Scroll to Page 2 when button clicked
document.getElementById("scrollDown").addEventListener("click", () => {
  document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scroll").addEventListener("click", () => {
  document.getElementById("page4").scrollIntoView({ behavior: "smooth" });
});

// ---------- PAGE 4: Property Switcher ----------
const properties = {
  haig: {
    year: "2024",
    name: "Haig",
    location: "Wall Street,New York ",
    area: "925 sq.ft",
    bath: "3 Bath",
    bed: "2 Bed",
    price: "$26,45,780 USD",
    image: "C:/Users/91840/Downloads/Demo-Task/prop1.png",
  },
  myrtle: {
    year: "2025",
    name: "Lux Club",
    location: " Ocean View , LA",
    area: "1150 sq.ft",
    bath: "4 Bath",
    bed: "3 Bed",
    price: "$78,05,125 USD",
    image: "C:/Users/91840/Downloads/Demo-Task/prop2.png",
  },
  clifton: {
    year: "2023",
    name: "Clifton",
    location: "78 Park Ave, Austin, TX, 73301",
    area: "875 sq.ft",
    bath: "2 Bath",
    bed: "2 Bed",
    price: "$20,950 USD",
    image: "C:/Users/91840/Downloads/Demo-Task/prop3.png",
  },
  sidney: {
    year: "2022",
    name: "Sidney House",
    location: "14 River Rd, Chicago, IL, 60601",
    area: "1020 sq.ft",
    bath: "3 Bath",
    bed: "2 Bed",
    price: "$33,100 USD",
    image: "C:/Users/91840/Downloads/Demo-Task/prop4.png",
  },
  sweetman: {
    year: "2025",
    name: "Sweetman",
    location: "Hillview Estate, Denver, CO, 80202",
    area: "980 sq.ft",
    bath: "3 Bath",
    bed: "2 Bed",
    price: "$29,990 USD",
    image: "C:/Users/91840/Downloads/Demo-Task/prop1.png",
  },
};

const propertyDisplay = document.getElementById("propertyDisplay");
const propertyItems = document.querySelectorAll(".property-list li");

function displayProperty(id) {
  const p = properties[id];
  propertyDisplay.innerHTML = `
    <div class="property-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="property-info">
        <p>${p.year}</p>
        <h3>${p.name}</h3>
        <p>${p.location}</p>
        <div class="property-stats">
          <span>${p.area}</span>
          <span>${p.bath}</span>
          <span>${p.bed}</span>
        </div>
        <p class="property-price">${p.price}</p>
        <button class="btn small">+EXPLORE PROJECT</button>
      </div>
    </div>
  `;
}

propertyItems.forEach(item => {
  item.addEventListener("click", () => {
    propertyItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    displayProperty(item.getAttribute("data-id"));
  });
});

// Default display = first property
displayProperty("haig");



// ---------- PAGE 5: Slider ----------
const slides = document.querySelectorAll("#page5 .slide");
const prevBtn = document.querySelector("#page5 .prev");
const nextBtn = document.querySelector("#page5 .next");
const dotsContainer = document.querySelector("#page5 .slider-dots");

let currentSlide = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll("#page5 .dot");

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

nextBtn.addEventListener("click", () => {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
});

prevBtn.addEventListener("click", () => {
  let prev = currentSlide - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Auto-slide every 5 seconds
setInterval(() => {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}, 5000);






