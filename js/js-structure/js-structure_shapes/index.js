console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";

const root = document.getElementById("root");

/* function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    const newColor = getRandomColor();
    circle.style.backgroundColor = newColor;
  });
  return circle;
} */

const circleElement = Circle();

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const newColor = getRandomColor();
  square.style.backgroundColor = newColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const newColor = getRandomColor();
  pentagon.style.backgroundColor = newColor;
});

root.append(circleElement, square, pentagon);
