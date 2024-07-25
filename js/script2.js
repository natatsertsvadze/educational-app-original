"use strict";

const mainBox = document.querySelector(".programms-box");
const allBoxes = document.querySelectorAll(".box");

let it = 1;
let count = 0;
function changeContent(mainBox, allBoxes) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.innerHTML = allBoxes[count].innerHTML;
  mainBox.appendChild(newDiv);

  mainBox.removeChild(mainBox.firstElementChild);

  count++;
  if (count === 6) count = 0;
}
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;
let count5 = 1;
function scrollBox() {
  const allBoxes = document.querySelectorAll(".box");
  const boxWidth = allBoxes[1].offsetWidth;
  const boxWidth2 = mainBox.offsetWidth;

  console.log(allBoxes);
  allBoxes.forEach((box, i) => {
    console.log(allBoxes);
    // console.log(box.getBoundingClientRect());
    if (box.getBoundingClientRect().x > 0 && i === 0) {
      box.style.transform = `translateX(-${210}px)`;
      // }
    }
    if (i === 1) {
      if (box.getBoundingClientRect().x > 0) {
        box.style.transform = `translateX(-${210 * count1}px)`;
        count1++;
      } else {
        count1 = 1;
      }
    }
    if (i === 2) {
      if (box.getBoundingClientRect().x > 0) {
        // count1++;
        // console.log(1);
        box.style.transform = `translateX(-${210 * count2}px)`;
        count2++;
      } else {
        count2 = 1;
      }
    }
    if (i === 3) {
      if (box.getBoundingClientRect().x > 0) {
        // count1++;
        // console.log(1);
        box.style.transform = `translateX(-${210 * count3}px)`;
        count3++;
      } else {
        count3 = 1;
      }
    }
    if (i === 4) {
      if (box.getBoundingClientRect().x > 0) {
        // count1++;
        // console.log(1);
        box.style.transform = `translateX(-${210 * count4}px)`;
        count4++;
      } else {
        count4 = 1;
      }
    }
    if (i === 5) {
      if (box.getBoundingClientRect().x > 0) {
        // count1++;
        // console.log(1);
        box.style.transform = `translateX(-${210 * count5}px)`;
        count5++;
      } else {
        count5 = 1;
      }
    }
  });
  it++;
}

document.addEventListener("DOMContentLoaded", function () {
  let intervalId;

  function startInterval() {
    intervalId = setInterval(function () {
      changeContent(mainBox, allBoxes);
    }, 1500);
  }

  function stopInterval() {
    clearInterval(intervalId);
  }

  startInterval();

  mainBox.addEventListener("mouseenter", function () {
    stopInterval();
  });

  mainBox.addEventListener("mouseleave", function () {
    startInterval();
  });
});
