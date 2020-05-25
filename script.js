let copyPaste = document.querySelector("h5");
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

let gradientSetter = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    copyPaste.textContent = "VOILA!! Here's Your CSS Code:";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", gradientSetter);
color2.addEventListener("input", gradientSetter)
