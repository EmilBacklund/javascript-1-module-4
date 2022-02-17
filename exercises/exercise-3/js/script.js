// I want when I click the Button the circle background changes
// I want when I refresh the circle keeps this color.

// 1. select the circle by class .circle
// 2. select the button by its id #circle__button

const circle = document.querySelector(".circle");

const circleActionBtn = document.querySelector("#circle__button");

// 3. When I click on the button I show a message

const myBgColor = localStorage.getItem("bgColor");
circle.style.background = myBgColor;

circleActionBtn.addEventListener("click", function () {
  // We are setting the colour on a localStorage
  localStorage.setItem(
    "bgColor",
    "linear-gradient(to right, #16a085, #f4d03f)"
  );
  // 4. I wantt to change the background color of the circle
  circle.style.background = "linear-gradient(to right, #16a085, #f4d03f)";
});

// localStorage

// 1.localStorage
