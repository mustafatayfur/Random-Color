let button = document.querySelector("#button");
let body = document.querySelector("body");
let text = document.querySelector("span");


button.addEventListener("click", () =>{
    let color1 = Math.ceil(Math.random() * 255);
    let color2 = Math.ceil(Math.random() * 255);
    let color3 = Math.ceil(Math.random() * 255);
    text.innerText = `rgb(${color1}, ${color2}, ${color3})`;
    body.style.backgroundColor = text.innerText;
});





