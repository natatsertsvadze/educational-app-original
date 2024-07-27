"use strict";

// mentors-carousel
let currentMentorsIndex = 0;
const boxPerSlide = 3;

const slides = document.querySelector(".slider");
const boxes = Array.from(slides.children);
const boxesSlides = boxes.length;
const totalSlides = Math.ceil(boxesSlides / boxPerSlide);

boxes.forEach(box => {
  const clone = box.cloneNode(true);
  slides.appendChild(clone);
});

function toTheNextSlide() {
  const slideHeight = slides.firstElementChild.getBoundingClientRect().height;
  currentMentorsIndex++;
  if (currentMentorsIndex >= boxesSlides) {
    currentMentorsIndex = 0;
    slides.style.transition = 'none'; // Disable transition when jumping back to start
    slides.style.transform = 'translateY(0)';
    
    // Force reflow to restart the animation
    slides.offsetHeight; // Trigger reflow
    
    // Re-enable transition and move to the next slide
    slides.style.transition = 'transform 0.5s ease';
  }
  
  const offset = -currentMentorsIndex * slideHeight;
  slides.style.transform = `translateY(${offset}px)`;
}

setInterval(toTheNextSlide, 3000);

// new courses favourite
const fullHeart = document.querySelectorAll(".new-courses-emptyheart");

const toggleFavourite = (event) => {
  const element = event.currentTarget;
  element.classList.toggle("favourite");

  if (element.classList.contains("favourite")) {
    element.src = "images/main/new-courses-heart-full.png";
  } else {
    element.src = "images/main/new-courses-emptyheart.png";
  }
};

fullHeart.forEach((element) => {
  element.addEventListener("click", toggleFavourite);
});

// new courses carousel
let currentSliderIndex = 0;

const totalImages = document.querySelectorAll(
  ".new-courses-entire-card"
).length;

function updateCarousel() {
  const images = document.querySelectorAll(".new-courses-entire-card");
  const imagesPerSlide = 4;

  images.forEach((image, index) => {
    if (
      index >= currentSliderIndex &&
      index < currentSliderIndex + imagesPerSlide
    ) {
      image.style.display = "flex";
    } else {
      image.style.display = "none";
    }
  });
}

function prev() {
  const imagesPerSlide = 4;
  if (currentSliderIndex > 0) {
    currentSliderIndex--;
  } else {
    currentSliderIndex = totalImages - imagesPerSlide;
  }
  updateCarousel();
}

function next() {
  const imagesPerSlide = 4;
  if (currentSliderIndex < totalImages - imagesPerSlide) {
    currentSliderIndex++;
  } else {
    currentSliderIndex = 0;
  }
  updateCarousel();
}

window.addEventListener("resize", updateCarousel);
updateCarousel();

document
  .querySelector(".new-courses-arrow-left")
  .addEventListener("click", prev);
document
  .querySelector(".new-courses-arrow-right")
  .addEventListener("click", next);

// accordion
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector(".accordion-arrow");

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("up");
      } else {
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.display = "none";
        });
        document.querySelectorAll(".accordion-arrow").forEach((arrowIcon) => {
          arrowIcon.classList.remove("up");
        });

        content.style.display = "block";
        arrow.classList.add("up");
      }
    });
  });
});

// scroll top btn
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
