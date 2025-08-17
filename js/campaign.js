const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.querySelector(".carousel-dots");
const carouselText = document.getElementById("carousel-text"); 
let currentIndex = 0;

// Editable captions: add as many as you want
// If a slide has no corresponding caption, it will show "Caption missing"
const captions = [
  "Reviving Clubs And Sports Facilities",
  "Rebuilding Our Activities And Tradations",
  "Reinventing Our Competitions And Celebrations ",
  "Modern Computer Labs For Better Software Skills",
  "Better Sports Grounds For A More Fun Experience ",
  "Modernized Physics Lab For A More Practical Experience",
  "A Well Organized Chemistry Lab For Better Learning"
  // Add more captions in order; leave blank for "Caption missing"
];

// Function to show slide and update caption
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  // Fade effect for caption
  carouselText.style.opacity = 0;
  setTimeout(() => {
    carouselText.textContent = captions[index] || "Caption missing";
    carouselText.style.opacity = 1;
  }, 300);
}

// Generate dots dynamically based on slides
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Next / Prev buttons
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Auto-play every 5 seconds
let autoPlay = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

/* Swipe support */
let startX = 0, endX = 0;
const carousel = document.querySelector(".carousel-track");

carousel.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; });
carousel.addEventListener("touchmove", (e) => { endX = e.touches[0].clientX; });
carousel.addEventListener("touchend", () => {
  const diffX = startX - endX;
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) { currentIndex = (currentIndex + 1) % slides.length; }
    else { currentIndex = (currentIndex - 1 + slides.length) % slides.length; }
    showSlide(currentIndex);
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  }
});

// Initialize on page load
showSlide(currentIndex);
