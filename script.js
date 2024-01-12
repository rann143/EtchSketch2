const container = document.querySelector(".container");
//const box = document.createElement('div');

for (i = 0; i < 256; i++) {
    //generate new div
    const square = document.createElement('div');
    //style each div
    square.setAttribute("style", 
    "border: solid 1px;\
    border-color: black;\
    padding: 0;\
    margin: 0;\
    box-sizing: border-box");
    square.style.width = "35px";
    square.style.height = "35px";
    //append to container
    container.appendChild(square);
}

// Get container Width (560px)
// Get container Height (560px)

// Generate div squares to fill the space
