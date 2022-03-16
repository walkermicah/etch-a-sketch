"use strict";

const grid = document.querySelector(".grid");
const blackBackgroundBtn = document.querySelector("#black-bkg");
const whiteBackgroundBtn = document.querySelector("#white-bkg");
const greyBackgroundBtn = document.querySelector("#grey-bkg");
const sizeBtns = document.querySelectorAll(".size-btn");
const blackSketchBtn = document.querySelector("#black-sketch");
const whiteSketchBtn = document.querySelector("#white-sketch");
const pastelSketchBtn = document.querySelector("#pastel-sketch");
const neonSketchBtn = document.querySelector("#neon-sketch");
const eraseBtn = document.querySelector("#erase");

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

//CHANGE GRID SIZE
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

    //when background is black, grid remains white when size is changed
    if (grid.style.backgroundColor === "black") {
      changeGridWhite();
      whiteSketch();
    } else {
      blackSketch();
    }
  });
});

//CHANGE GRID COLORS
//buttons to change background and grid colors
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

//CHANGE SKETCH COLOR

//functions to sketch
function blackSketch() {
  const gridSquares = document.querySelectorAll(".grid div div");
  gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("black-sketch");
      div.classList.remove("white-sketch");
      div.classList.remove("neon-sketch");
      div.classList.remove("pastel-sketch");
    });
  });
}

function whiteSketch() {
  const gridSquares = document.querySelectorAll(".grid div div");
  gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("white-sketch");
      div.classList.remove("neon-sketch");
      div.classList.remove("black-sketch");
      div.classList.remove("pastel-sketch");
    });
  });
}

function pastelSketch() {
  const gridSquares = document.querySelectorAll(".grid div div");
  gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("pastel-sketch");
      div.classList.remove("white-sketch");
      div.classList.remove("black-sketch");
      div.classList.remove("neon-sketch");
    });
  });
}

function neonSketch() {
  const gridSquares = document.querySelectorAll(".grid div div");
  gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("neon-sketch");
      div.classList.remove("white-sketch");
      div.classList.remove("black-sketch");
      div.classList.remove("pastel-sketch");
    });
  });
}

//buttons to change sketch color
whiteSketchBtn.addEventListener("click", () => {
  whiteSketch();
});

blackSketchBtn.addEventListener("click", () => {
  blackSketch();
});

pastelSketchBtn.addEventListener("click", () => {
  pastelSketch();
});

neonSketchBtn.addEventListener("click", () => {
  neonSketch();
});

blackSketch();

//ERASE SKETCH
eraseBtn.addEventListener("click", () => {
  const gridSquares = document.querySelectorAll(".grid div div");
  gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.remove("neon-sketch");
      div.classList.remove("white-sketch");
      div.classList.remove("black-sketch");
      div.classList.remove("pastel-sketch");
    });
  });
});

//CLEAR SKETCH

//to do:
//make clear grid button
//make neon and pastel buttons functional
//highlight button currently in use
