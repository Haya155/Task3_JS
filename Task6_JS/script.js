let menDiv = document.getElementById("menDiv");

fetch("menu.json").then((Response) =>
Response.json()) .then((data) => {
    let menu = data.menu;
    localStorage.setItem("menu",JSON.stringify(menu));

    for(let i=0; i<menu.length;i++)
    {
        menDiv.innerHTML += `
                <div>
                    <h3>mealName:${menu[i].mealName}</h3>
                    <p>Price: ${menu[i].price}JD</p>
                    <p>Availability: ${menu[i].availability}</p>
                </div>
            `;
        }
    })
    .catch((error) => {
        console.log("Error:", error);
});



    



