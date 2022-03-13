"use strict";

const grid = document.querySelector(".grid");
const blackBackgroundBtn = document.querySelector("#black-bkg");
const whiteBackgroundBtn = document.querySelector("#white-bkg");
const greyBackgroundBtn = document.querySelector("#grey-bkg");

//Buttons to change background color
blackBackgroundBtn.addEventListener("click", () => {
  grid.style.backgroundColor = "black";
});
whiteBackgroundBtn.addEventListener("click", () => {
  grid.style.backgroundColor = "white";
});
greyBackgroundBtn.addEventListener("click", () => {
  grid.style.backgroundColor = "rgb(150, 148, 148)";
});

//Buttons to change grid size

//Buttons to change sketch color

//Erase button
