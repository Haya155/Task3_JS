let form = document.getElementById("orderForm");

form.addEventListener("submit", function(m){
    m.preventDefault();

    let userName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    let Phone = document.getElementById("phonenumber").value;
    let Order = document.getElementById("order").value;

    let userRegex = /^\S+$/;
    if(!userRegex.test(userName)){
        alert("Invalid Username: Must not be empty and must not contain spaces.");
        return;
    }

  
    let passRegex = /^(?=.*\d).{8,}$/;
    if(!passRegex.test(Password)){
        alert("Invalid Password: Must be at least 8 characters long and contain at least one number.");
        return;
    }

    let phoneRegex = /^07\d{8}$/;
    if(!phoneRegex.test(Phone)){
        alert("Invalid Phone Number: Must start with '07' and be exactly 10 digits.");
        return;
    }

    localStorage.setItem("savedOrder", Order);
    sessionStorage.setItem("savedUsername", userName);

    alert("Welcome, " + userName);

    let resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
    <h2>Welcome, ${userName}</h2>
    <p><strong>Saved Order:</strong> ${localStorage.getItem("savedOrder")}</p>
    <p><strong>Saved Username:</strong> ${sessionStorage.getItem("savedUsername")}</p>
`;

  
});