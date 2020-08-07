/*const container = document.querySelector(".myCont");
const dark = document.querySelector(".btn-dark");
const body = document.querySelector("body");
const p = document.querySelector(".myCont p");



container.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    r = Math.floor(Math.random() * 150);
    g = Math.floor(Math.random() * 150);
    b = Math.floor(Math.random() * 150);
    dark.style.backgroundColor  = `rgb(${r}, ${g}, ${b})`;
    dark.style.width = "100px";
    p.style.color = "#fff";
})
container.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    dark.style.width = "0px";
    p.style.color = "#0E1731";
})
container.addEventListener("click", generateRandomColor);

function generateRandomColor() {
    r = Math.floor(Math.random() * 150);
    g = Math.floor(Math.random() * 150);
    b = Math.floor(Math.random() * 150);
    body.style.color = `rgb(${r}, ${g}, ${b})`
}*/
const button = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-small .container ul");


button.addEventListener("click", function () {
    if (menu.style.width === "0px") {
        menu.style.width = "100vw";
    } else {
        menu.style.width = "0px";
    }
})
