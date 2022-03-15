"use strict";

const grid = document.querySelector(".grid");
const blackBackgroundBtn = document.querySelector("#black-bkg");
const whiteBackgroundBtn = document.querySelector("#white-bkg");
const greyBackgroundBtn = document.querySelector("#grey-bkg");
const sizeBtns = document.querySelectorAll(".size-btn");

//GRID SIZE

//create grid
function addDiv(n) {
  for (let i = 0; i < n; i++) {
    const newColumn = document.createElement("div");
    newColumn.classList.add("grid-columns");

    for (let i = 0; i < n; i++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("grid-squares");
      newColumn.appendChild(newSquare);
    }
    grid.appendChild(newColumn);
  }
}

addDiv(30);

//clear grid before new one is created
function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

//buttons to change grid size
sizeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearGrid();
    addDiv(e.target.id);
  });
});

//GRID COLORS

//change background color
function changeBackground(bkgColor) {
  grid.style.backgroundColor = bkgColor;
}

//make grid lines white
function changeGridWhite() {
  const gridDivs = document.querySelectorAll(".grid div");
  gridDivs.forEach((div) => {
    div.style.borderColor = "white";
  });
}

//make grid lines black
function changeGridBlack() {
  const gridDivs = document.querySelectorAll(".grid div");
  gridDivs.forEach((div) => {
    div.style.borderColor = "black";
  });
}

//link background and grid colors to buttons
blackBackgroundBtn.addEventListener("click", () => {
  changeBackground("black");
  changeGridWhite();
});

whiteBackgroundBtn.addEventListener("click", () => {
  changeBackground("white");
  changeGridBlack();
});

greyBackgroundBtn.addEventListener("click", () => {
  changeBackground("rgb(150, 148, 148)");
  changeGridBlack();
});

//SKETCH COLOR

//ERASE
