var _ = require('lodash')
var array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var header = document.getElementsByTagName("h1");
var subtitle = document.getElementsByTagName("h2");
var header3 = document.getElementsByTagName("h3");
var color3 = document.querySelector(".color3");
var random_but = document.getElementById("random-but");
function h1ColorChanger() {
    for (var i = 0; i < header.length; i++) {
        header[i].style.color = color3.value + 80;
        subtitle[i].style.color = color3.value;
        header3[i].style.color = color3.value;
    }
    console.log(color3.value)
}
window.onload = css.textContent = color1.value + ", " + color2.value;

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
function getColor() {
  return (
    "#" + Math.random().toString(16).slice(2, 8)
  );
}
function setBackround() {
    color1.value = getColor();
    color2.value = getColor();
    color3.value = getColor();
    setGradient();
    h1ColorChanger();
}    
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", h1ColorChanger);
random_but.addEventListener("click", setBackround);
