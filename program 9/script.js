let image = document.getElementById("hoverImg");
let label = document.getElementById("hoverLabel");
let image1 = "Boy.jpg";
let image2 = "Girl.jpg";

image.addEventListener("mouseenter", handleMouseEnter);
image.addEventListener("mouseout", handleMouseOut);

function handleMouseEnter() {
  image.src = image1;
  label.innerText = "This is a Boy";

}

function handleMouseOut() {
  image.src = image2;
  label.innerText = "This is a Girl";
}