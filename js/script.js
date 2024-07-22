// mentors-slider
document.addEventListener('DOMContentLoaded', function() {
  const mentorsSlider = document.querySelector('.mentors-slider');
    const slider = document.querySelector('.slider');
    const mentorsBox = document.querySelectorAll('.person-box');
    const slideHeight = mentorsBox[0].offsetHeight; 

    let slideIndex = 0

    const moveToNextSlide = () => {
      slideIndex++
      if (slideIndex >= mentorsBox.length) {
        slideIndex = 0
      }
      const translateY = -slideIndex * slideHeight
      slider.style.transform = `translateY(${translateY}px)`
    }

    const slideInterval = setInterval(moveToNextSlide, 2000)


    mentorsSlider.addEventListener('mouseout', () => {
      clearInterval(slideInterval);
  });

  mentorsSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(moveToNextSlide, 2000);
});
})

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
