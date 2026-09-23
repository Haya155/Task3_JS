let submitBtn = document.getElementById("submitBtn");                    // 1. getElementById
let resultMsg = document.getElementById("resultMessage");                // 1. getElementById
let selectTag = document.getElementsByTagName("select")[0];              // 2. getElementsByTagName
let btnByClass = document.getElementsByClassName("btn-style")[0];        // 3. getElementsByClassName
let nameInput = document.querySelector("#customerName");                 // 4. querySelector


// 1. onclick -> display the order
submitBtn.onclick = function() {
    let name = nameInput.value; 
    let order = selectTag.value; 

    if (name === "") {
        resultMsg.style.color = "red";
        resultMsg.innerText = "Please enter your name first!";
    } else {
        resultMsg.style.color = "green";
        resultMsg.innerText = "Hello " + name + "! Your order is " + order + ".";
    }
};

// 2. onmouseover -> change the button color
submitBtn.onmouseover = function() {
    this.style.backgroundColor = "#7135d8"; 
};

// 3. onmouseout -> return the button to its original color
submitBtn.onmouseout = function() {
    this.style.backgroundColor = "#3498db";
}