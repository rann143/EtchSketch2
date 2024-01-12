const container = document.querySelector(".container");

let contWidth = container.offsetWidth;
let contHeight = container.offsetHeight;
let sqrWidth = contWidth / 16;
let sqrHeight = contHeight / 16;


//When I enter a number. Find the sq. of it
//and create that many square divs

//create variable that holds value from grid size input
const gridSize = document.querySelector("#grid-size").value;

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

//Create nodelist of each square
const squares = document.querySelectorAll('div.square');

//add the .color class for each square in the nodelist
squares.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.classList.add('color');
    })
});