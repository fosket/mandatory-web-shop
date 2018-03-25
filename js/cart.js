const buyButtons = $(".add-to-cart");
const tableBody = $("#cart-list");
const cartNumber = $("#cartNumber");
let productAmmount = 0;

// En array som innehåller 6 arrayer kopplat till respektive produkt. Används för att hålla koll på hur många av varje produkt det ligger i varukorgen.

const cartProducts = [
    [],
    [],
    [],
    [],
    [],
    [],
];

//Lägger eventlyssnare på köp-knappen, lägger till produkten i varukorgen, uppdaterar varukorgssiffran och skapar/uppdaterar varukorgs tablet.

for (let i = 0; i < buyButtons.length; i++) { 
    buyButtons.eq(i).click(event => {    
        increaseCartNumber();
        addToCart(i);
        createCart();
    });
}

//Funktion för att undvika redudant kod
const createCartCount = () => {
    cartNumber.html(productAmmount); 
}

//Ökar siffran vid varukorgen
const increaseCartNumber = () =>{
    productAmmount ++;
    createCartCount(); 
};

//Minskar siffran vid varukorgen
const decreaseCartNumber = () => {
    productAmmount --;
    createCartCount();
}

//Kod för att lägga in en produkt i varukorgen från produkt sidan

const addToCart = (productIndex) => {
    for (let i = 0; i < cartProducts.length; i++) {
        if (i === productIndex) {
            cartProducts[i].push(products[productIndex]);
        }
    }
}

//kod för att skapa varukorgen som kommer att visas som ett table

const createCart = () => {
    let tableBodyContent = "";
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].length > 0) {
            const html = [
                "<tr>",
                    "<td>" + cartProducts[i][0].id + "</td>",
                    "<td>" + cartProducts[i][0].productName + "</td>",
                    "<td><button class='btn btn-primary' onClick='addProduct(this.id)' id='" + i + "'>Add</button></td>",
                    "<td>" + cartProducts[i].length + "</td>",
                    "<td><button class='btn btn-primary' onClick='removeProduct(this.id)' id='" + i + "'>Remove</button></td>",
                "</tr>"
            ].join('');

            tableBodyContent += html;
        }
    }

    tableBody.html(tableBodyContent);
}

//Kod för att lägga en till produkt i varukorgen

const addProduct = (productIndex) => {
    const newProduct = cartProducts[productIndex][0];
    cartProducts[productIndex].push(newProduct);
    increaseCartNumber();
    createCart();

}

//Kod för att ta bort en produkt från varukorgen 

const removeProduct = (productIndex) => {
    cartProducts[productIndex].pop();
    createCart();
    decreaseCartNumber();
}
