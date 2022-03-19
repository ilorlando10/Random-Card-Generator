/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let icons = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  if (randomIcon == "&#9830" || randomIcon == "&#9829") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".middle").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  }

  document.querySelector(".top").innerHTML = randomIcon;
  document.querySelector(".bottom").innerHTML = randomIcon;
  document.querySelector(".middle").innerHTML = randomNumber;
};
