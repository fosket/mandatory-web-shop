
let products = [];

/**
 * Hämta data för alla produkter
 */
$.get("http://demo.edument.se/api/products", (data) => {
	products = data;
	createProductsPage();
	createEmtpyCart();
});



/*
* Loop för att skapa HTML för alla produkter
*/
const createProductsPage = () => {
	let insideHTML = "";

	products.forEach((product, index) => {
		const html = 
			"<br />" +
			"<div class='product row' id='product" + index +"'>" +
				"<div class='col-md-6'>" +
					"<div class='productName'>" +
						"<h4>" + products[index].Name + "</h4>" +
					"</div>" +
					"<div class='productPrice'>" +
						"<h6>" + products[index].Price + "kr</h6>" +
					"</div>" +
					"<div class='productDescription'>" +
						"<p>" + products[index].Description + "</p>" +
					"</div>" +
					"<div class='leaveReview'>" +
						"<p onClick='initLeaveReview(" + index + ")'>Lämna recension</p>" +
					"</div>" +
					"<button onClick='handlePurchase(" + index + ")' class='add-to-cart btn btn-primary'> Köp </button>" +
				"</div>" +
				"<div class='productImage col-md-6'>" +
					"<img class='img-fluid rounded mb-3 mb-md-0' src='" + products[index].Image + "'>" +
				"</div>" +
			"</div>";
			insideHTML += html;
	});

	let productList = $('#products');
	productList.html(insideHTML);
}






$("#productsPage").click(event => {
    showProductsPage();
});

$("#checkoutPage").click(event => {
	showCheckoutPage();
});

/**
 * Funktion som visar produktsidan och döljer de andra två
 */
const showProductsPage = () => {
	$("#products").css("display", "block");   
	$("#checkout").css("display", "none");
	$("#reviewPage").css("display", "none");
}

/**
 * Funktion som visar checkoutSidan och döljer de andra två
 */
const showCheckoutPage = () => {
	$("#products").css("display", "none");   
	$("#checkout").css("display", "block");
	$("#reviewPage").css("display", "none");
}

/**
 * Funktion som visar reviewSidan och döljer de andra två
 */
const showReviewPage = () => {
    $("#products").css("display", "none");
    $("#checkout").css("display", "none");
    $("#reviewPage").css("display", "block");
}