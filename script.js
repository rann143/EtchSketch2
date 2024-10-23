const container = document.querySelector(".container");
const gridResizeBtn = document.querySelector("#grid-resize");
const clearBtn = document.querySelector("#clear-button");

// GENERATE INTIAL GRID
generateGrid(16);
addResizeFunctionality();

function generateGrid(size) {
  removeAllChildNodes(container);
  // input = gridSize;
  for (let i = 0; i < size; i++) {
    //generate new div
    const row = document.createElement("div");

    //set class of square to '.square'
    row.setAttribute("class", "row");

    for (let j = 0; j < size; j++) {
      //generate new div
      const square = document.createElement("div");

      //set class of square to '.square'
      square.setAttribute("class", "square");

      row.appendChild(square);
    }

    //append to container
    container.appendChild(row);
  }

  addDrawFunctionality();
  addClearFunctionality();
}

function addDrawFunctionality() {
  //get all the squares in the grid
  const squares = document.querySelectorAll("div.square");

  //randomize background color for each square in the nodelist when mouse is hovering
  squares.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      item.style["background-color"] = `hsl(${randomInteger(360)},\
         ${randomInteger(100)}%,\
         ${randomInteger(100)}%)`;
    });
  });
}

function addResizeFunctionality() {
  gridResizeBtn.addEventListener("click", () => {
    resizeGrid();
  });
}

function addClearFunctionality() {
  const squares = document.querySelectorAll("div.square");
  // change background color to white for all squares if clear button is clicked
  clearBtn.addEventListener("click", () => {
    squares.forEach((item) => {
      item.style["background-color"] = "white";
    });
  });
}

function resizeGrid() {
  let gridSize = Number(
    prompt("Enter your Grid Size (Whole Number from 10 to 100):")
  );

  if (gridSize > 100 || gridSize < 10) {
    alert("Must enter a whole number from 10 to 100");
  } else if (Number.isInteger(gridSize) == false) {
    alert("Must enter a whole number from 10 to 100");
  } else {
    generateGrid(gridSize);
  }
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
