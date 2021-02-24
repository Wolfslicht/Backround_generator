var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rgb1 = color1.value.match(/.{1,2}/g);
var rgb2 = color2.value.match(/.{1,2}/g);
window.onload = css.textContent = color1.value + ", " + color2.value;
function getFirstColor() {
    console.log(color1);
    console.log(color2);
    css.textContent = body.style.background + ";";
}
function setGradient() {
    console.log(color1.value);
    console.log(color2.value);
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    +", " 
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
/* h4.addEventListener("input", radomColorGenerator) */
