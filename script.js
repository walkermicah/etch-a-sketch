"use strict";

const grid = document.querySelector(".grid");
const blackBackgroundBtn = document.querySelector("#black-bkg");
const whiteBackgroundBtn = document.querySelector("#white-bkg");
const greyBackgroundBtn = document.querySelector("#grey-bkg");

//Change grid size

//function to create grid of divs
function addDiv() {
  for (let i = 0; i < 4; i++) {
    const newColumn = document.createElement("div");
    newColumn.classList.add("grid-columns");

    for (let y = 0; y < 4; y++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("grid-squares");
      newColumn.appendChild(newSquare);
    }
    grid.appendChild(newColumn);
  }
}

addDiv();

//create 16 divs
//arrange the divs in a grid

//Change background color
blackBackgroundBtn.addEventListener("click", () => {
  grid.style.backgroundColor = "black";
});
whiteBackgroundBtn.addEventListener("click", () => {
  grid.style.backgroundColor = "white";
});
greyBackgroundBtn.addEventListener("click", () => {
  grid.style.backgroundColor = "rgb(150, 148, 148)";
});

//Change sketch color

//Erase button
