"use strict";

const mainBox = document.querySelector(".programms-box");
const allBoxes = document.querySelectorAll(".box");
// Left btns
const leftBtn = document.querySelector(".left-btn");
const leftIconFull = document.querySelector(".left-click-full");
const leftIconEmpty = document.querySelector(".left-click-empty");
// Right btns
const rightBtn = document.querySelector(".right-btn");
const rightIconFull = document.querySelector(".right-click-full");
const rightIconEmpty = document.querySelector(".right-click-empty");

const coursesBox = document.querySelector(".requested-courses-sec");
const cardsEachBox = document.querySelectorAll(".each-course");

// hearts
const heartBox = document.querySelectorAll(".heart");
const fullHeartCourses = document.querySelectorAll(".full-heart");
let it = 1;
let card = 0;

for (let i = 5; i < 9; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(`each-course`);
  newDiv.classList.add(`number-${i}`);
  newDiv.classList.add(`hidden`);
  newDiv.innerHTML = cardsEachBox[i - 5].innerHTML;
  coursesBox.appendChild(newDiv);
}
const childrenArr = Array.from(coursesBox.children);
let leftClick = 0;
function moveCards() {
  childrenArr.forEach((child, i) => {
    if (i >= leftClick && i < leftClick + 4) {
      console.log(child);
      child.classList.remove("hidden");
    } else {
      child.classList.add("hidden");
    }
  });
}
leftBtn.addEventListener("click", function () {
  if (leftClick > 0) {
    leftClick--;
    moveCards();
    rightIconFull.classList.remove("hidden");
    rightIconEmpty.classList.add("hidden");
  }
  if (leftClick === 0) {
    leftIconFull.classList.add("hidden");
    leftIconEmpty.classList.remove("hidden");
  }
});
rightBtn.addEventListener("click", function () {
  if (leftClick < 4) {
    leftClick++;
    moveCards();
    leftIconFull.classList.remove("hidden");
    leftIconEmpty.classList.add("hidden");
  }
  if (leftClick === 4) {
    rightIconFull.classList.add("hidden");
    rightIconEmpty.classList.remove("hidden");
  }
});
// function changeContentCards(mainBox, allBoxes) {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add(`each-course`);
//   newDiv.classList.add(`number-${card}`);
//   newDiv.innerHTML = allBoxes[card].innerHTML;
//   mainBox.appendChild(newDiv);

//   // mainBox.removeChild(mainBox.firstElementChild);
//   cardsEachBox[card].classList.add("hidden");

//   card++;
//   // if (card === 4) card = 0;
// }
// function moveCardsLeft(mainBox, allBoxes) {
//   // mainBox[count + 4];
//   console.log(mainBox.lastElementChild);
//   mainBox.remove(mainBox.lastElementChild);
//   console.log(mainBox.lastElementChild);
//   console.log(allBoxes);
// }
// rightBtn.addEventListener("click", function () {
//   if (card === 4) {
//     rightIconFull.classList.add("hidden");
//     rightIconEmpty.classList.remove("hidden");
//     console.log(coursesBox);
//     console.log(cardsEachBox);
//   } else {
//     changeContentCards(coursesBox, cardsEachBox);
//   }
//   console.log(card);
// });

// leftBtn.addEventListener("click", function () {
//   moveCardsLeft(coursesBox, cardsEachBox);
// });
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

document.querySelectorAll(".heart").forEach((heart) => {
  heart.addEventListener("click", function () {
    heart.lastElementChild.classList.toggle("hidden");
    console.log(heart);
  });
});

// function scrollBox() {
//   const allBoxes = document.querySelectorAll(".box");
//   const boxWidth = allBoxes[1].offsetWidth;
//   const boxWidth2 = mainBox.offsetWidth;

//   console.log(allBoxes);
//   allBoxes.forEach((box, i) => {
//     console.log(allBoxes);
//     // console.log(box.getBoundingClientRect());
//     if (box.getBoundingClientRect().x > 0 && i === 0) {
//       box.style.transform = `translateX(-${210}px)`;
//       // }
//     }
//     if (i === 1) {
//       if (box.getBoundingClientRect().x > 0) {
//         box.style.transform = `translateX(-${210 * count1}px)`;
//         count1++;
//       } else {
//         count1 = 1;
//       }
//     }
//     if (i === 2) {
//       if (box.getBoundingClientRect().x > 0) {
//         // count1++;
//         // console.log(1);
//         box.style.transform = `translateX(-${210 * count2}px)`;
//         count2++;
//       } else {
//         count2 = 1;
//       }
//     }
//     if (i === 3) {
//       if (box.getBoundingClientRect().x > 0) {
//         // count1++;
//         // console.log(1);
//         box.style.transform = `translateX(-${210 * count3}px)`;
//         count3++;
//       } else {
//         count3 = 1;
//       }
//     }
//     if (i === 4) {
//       if (box.getBoundingClientRect().x > 0) {
//         // count1++;
//         // console.log(1);
//         box.style.transform = `translateX(-${210 * count4}px)`;
//         count4++;
//       } else {
//         count4 = 1;
//       }
//     }
//     if (i === 5) {
//       if (box.getBoundingClientRect().x > 0) {
//         // count1++;
//         // console.log(1);
//         box.style.transform = `translateX(-${210 * count5}px)`;
//         count5++;
//       } else {
//         count5 = 1;
//       }
//     }
//   });
//   it++;
// }

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
