let productAmmount = 0;
let cartProducts = [];

/**
 * Lägger till en tom array för varje produkt. Varje arrays uppgift är helt simpelt att
 * hålla kolla på hur många av varje produkt som har lagt tills.
 */
const createEmtpyCart = () => {
	products.forEach(() => {
		cartProducts.push([]);
	});
};


//Lägger till produkten i varukorgen, uppdaterar varukorgssiffran och skapar/uppdaterar varukorgen.
const handlePurchase = (index) => {
	increaseCartNumber();
	addToCart(index);
	createCart();
}

//Funktion för att undvika redudant kod
const createCartCount = () => {
    $("#cartNumber").html(productAmmount); 
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
                    "<td>" + cartProducts[i][0].Id + "</td>",
                    "<td>" + cartProducts[i][0].Name + "</td>",
                    "<td><button class='btn btn-primary' onClick='addProduct(this.id)' id='" + i + "'>Add</button></td>",
                    "<td>" + cartProducts[i].length + "</td>",
                    "<td><button class='btn btn-primary' onClick='removeProduct(this.id)' id='" + i + "'>Remove</button></td>",
                "</tr>"
            ].join('');

            tableBodyContent += html;
        }
    }

    $("#cart-list").html(tableBodyContent);
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
