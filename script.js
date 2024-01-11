const container = document.querySelector(".container");
//const box = document.createElement('div');

for (i = 0; i < 256; i++) {
    //generate new div
    const box = document.createElement('div');
    box.setAttribute("style", "border: solid 1px; border-color: green; width: 10px; height: 10px;");
    //append to container
    container.appendChild(box);
}