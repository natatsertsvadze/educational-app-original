// mentors-slider
document.addEventListener("DOMContentLoaded", function () {
  const mentorsSlider = document.querySelector(".mentors-slider");
  const slider = document.querySelector(".slider");
  const mentorsBox = document.querySelectorAll(".person-box");
  const slideHeight = mentorsBox[0].offsetHeight;
  let slideIndex = 0;

  const moveToNextSlide = () => {
    slideIndex++;
    if (slideIndex >= mentorsBox.length) {
      slideIndex = 0;
    }
    const translateY = -slideIndex * slideHeight;
    slider.style.transform = `translateY(${translateY}px)`;
  };

  const slideInterval = setInterval(moveToNextSlide, 2000);

  mentorsSlider.addEventListener("mouseout", () => {
    clearInterval(slideInterval);
  });

  mentorsSlider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(moveToNextSlide, 2000);
  });
});

// new courses favourite
const fullHeart = document.querySelectorAll(".new-courses-emptyheart")

const toggleFavourite = (event) => {
  const element = event.currentTarget;
  element.classList.toggle("favourite");

  if (element.classList.contains("favourite")) {
    element.src = 'images/main/new-courses-heart-full.png';
  } else {
    element.src = 'images/main/new-courses-emptyheart.png';
  }
};

fullHeart.forEach(element => {
  element.addEventListener('click', toggleFavourite);
});

// new courses carousel 
let currentSliderIndex = 0;

const totalImages = document.querySelectorAll('.new-courses-entire-card').length;

function updateCarousel() {
  const images = document.querySelectorAll('.new-courses-entire-card');
  const imagesPerSlide = 4;

  images.forEach((image, index) => {
    if (index >= currentSliderIndex && index < currentSliderIndex + imagesPerSlide) {
      image.style.display = 'flex';
    } else {
      image.style.display = 'none';
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

window.addEventListener('resize', updateCarousel);
updateCarousel();

document.querySelector(".new-courses-arrow-left").addEventListener('click', prev);
document.querySelector(".new-courses-arrow-right").addEventListener('click', next);

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
        document.querySelectorAll("accordion-arrow").forEach((arrow) => {
          arrow.classList.remove("up");
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
