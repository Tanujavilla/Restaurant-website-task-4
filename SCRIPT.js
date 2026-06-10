function showMessage(){
    alert("Thank you for choosing Royal Feast");
}

document.getElementById("reservationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let people = document.getElementById("people").value;

    if(name === "" || email === "" || people === ""){

        alert("Please fill all fields!");

    }

    else{

        alert("Table Reserved Successfully 🍽️");

    }

});
let images = [
    "PIZZA.JPG",
    "BURGER.JPG",
    "PASTA.JPG"
];

let index = 0;

function nextImage(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    document.getElementById("slider").src = images[index];
}

function previousImage(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }

    document.getElementById("slider").src = images[index];
}

async function getJoke(){
    let response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single"
    );
    let data = await response.json();
    document.getElementById("joke").innerText =
    data.joke;
}

const products = [
    {name:"Pizza", category:"Italian", price:299},
    {name:"Pasta", category:"Italian", price:249},
    {name:"Burger", category:"Fast Food", price:199},
    {name:"French Fries", category:"Fast Food", price:149}
];

function displayProducts(items){

    let output = "";

    items.forEach(item => {

        output += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
        </div>
        `;
    });

    document.getElementById("productList").innerHTML = output;
}

displayProducts(products);

function showAll(){
    displayProducts(products);
}

function showItalian(){

    const filtered = products.filter(
        item => item.category === "Italian"
    );

    displayProducts(filtered);
}

function showFastFood(){

    const filtered = products.filter(
        item => item.category === "Fast Food"
    );

    displayProducts(filtered);
}

function sortPrice(){

    const sorted = [...products];

    sorted.sort((a,b) => a.price - b.price);

    displayProducts(sorted);
}

function saveFavorite(food){

    localStorage.setItem(
        "favoriteDish",
        food
    );

    document.getElementById("favorite").innerHTML =
    "Favorite Dish: " + food;
}

window.onload = function(){

    let savedDish =
    localStorage.getItem("favoriteDish");

    if(savedDish){

        document.getElementById("favorite").innerHTML =
        "Favorite Dish: " + savedDish;
    }
}