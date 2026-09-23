let fontFamilySelect = document.getElementById("fontFamily");
let fontSizeSelect = document.getElementById("fontSize");
let italicCheck = document.getElementById("italicCheck");
let boldCheck = document.getElementById("boldCheck");
let underlineCheck = document.getElementById("underlineCheck");
let textOutput = document.getElementById("textOutput");


fontFamilySelect.onchange = function() {
    textOutput.style.fontFamily = this.value;
};

fontSizeSelect.onchange = function() {
    textOutput.style.fontSize = this.value;
};


italicCheck.onchange = function() {
    if (this.checked) {
        textOutput.style.fontStyle = "italic";
    } else {
        textOutput.style.fontStyle = "normal";
    }
};


boldCheck.onchange = function() {
    if (this.checked) {
        textOutput.style.fontWeight = "bold";
    } else {
        textOutput.style.fontWeight = "normal";
    }
};


underlineCheck.onchange = function() {
    if (this.checked) {
        textOutput.style.textDecoration = "underline";
    } else {
        textOutput.style.textDecoration = "none";
    }
};