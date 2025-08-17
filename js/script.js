let currentIndex = 0;
let slideItems, slides, dots, autoSlide;

document.addEventListener("DOMContentLoaded", function () {
  slides = document.querySelector(".slides");
  slideItems = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  // create dots
  slideItems.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  dots = document.querySelectorAll(".dot");

  startAutoSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
  resetAutoSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideItems.length;
  updateSlide();
  resetAutoSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
  updateSlide();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}
