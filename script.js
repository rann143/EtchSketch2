const container = document.querySelector(".container");

let contWidth = container.offsetWidth;
let contHeight = container.offsetHeight;
let sqrWidth = contWidth / 16;
let sqrHeight = contHeight / 16;

const gridResizeBtn = document.querySelector('#grid-resize');

//When I enter a number. Find the sq. of it
//and create that many square divs


for (i = 0; i < 256; i++) {
    //generate new div
    const square = document.createElement('div');

    //set class of square to '.square'
    square.setAttribute('class', 'square');

    //style each div
    square.setAttribute("style", 
    "border: solid 1px;\
    border-color: black;\
    padding: 0;\
    margin: 0;\
    box-sizing: border-box");

    //set square dimenstions to fill container
    square.style.width = `${sqrWidth}px`;
    square.style.height = `${sqrHeight}px`;

    //append to container
    container.appendChild(square);

}

//get all the squares in the grid
const squares = document.querySelectorAll('div.square');

//add the .color class for each square in the nodelist when mouse is hovering
squares.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.classList.add('color');
    })
});

// Create variable for clear button
const clearBtn = document.querySelector('#clear-button');

// Remove '.color' class from all squares if clear button is clicked
clearBtn.addEventListener('click', () => {
    squares.forEach(item => {
        item.classList.remove('color');
    })
})

//Variable to store grid size
let gridSize = 0;

//Pop up for grid size when button clicked
gridResizeBtn.addEventListener('click', () => {
    gridSize = prompt('Enter your Grid Size:');
})

function resizeGrid(input) {
    input = gridSize;
    
}
