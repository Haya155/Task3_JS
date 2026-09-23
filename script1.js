let myImage = document.getElementById("myImage");
let circleBtn = document.getElementById("circleBtn");
let squareBtn = document.getElementById("squareBtn");


circleBtn.onclick = function() {
    myImage.style.borderRadius = "50%";
};

squareBtn.onclick = function() {
    myImage.style.borderRadius = "0%";
};