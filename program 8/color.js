let colorArray = ["Cyan", "Red", "LightSeaGreen", "Pink", "Blue", "Black", "Yellow", "White", "LightBlue"];
let button = document.getElementById("Color_change");
let label = document.getElementById("color");

button.addEventListener("click", changeBgcolor);

function changeBgcolor() {
    let randomindex = Math.floor(Math.random() * colorArray.length);
    let selectColor = colorArray[randomindex];
    document.body.style.backgroundColor = selectColor;
    document.body.style.color = (selectColor === "Black") ? "white" : "black";
    label.innerHTML = selectColor;
}
