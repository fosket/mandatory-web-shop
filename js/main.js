


/* Array of products */
let products = [
    { 
		id: 1,    
		productName: "ADIDAS ORIGINALS ULTRABOOST AT",    
		price: 240,     
		color: 'TRIPLE WHITE',      
		description: "Beskrivning1",    
		mainImage: "img/asd.jpg"
	},
    { 
		id: 2,    
		productName: "ADIDAS ORIGINALS ULTRABOOST LTD",   
		price: 220,     
		color: 'BLACK / WHITE',     
		description: "Beskrivning2",    
		mainImage: "img/asd.jpg",
	},
    { 
		id: 3,    
		productName: "CONVERSE ZIP 70`S LOW",             
		price: 123,     
		color: 'PURE PLATINUM',    
		description: "Beskrivning3",    
		mainImage: "img/asd.jpg",
	},
    { 
		id: 4,    
		productName: "TIMBERLAND 6\" FIELD BOOT WP",      
		price: 180,     
		color: 'LIGHT GREY',        
		description: "Beskrivning4",    
		mainImage: "img/asd.jpg"
	},
    { 
		id: 5,    
		productName: "TIMBERLAND 6\" PREMIUM BOOT",       
		price: 220,     
		color: 'HORWEEN',           
		description: "Beskrivning5",    
		mainImage: "img/asd.jpg"
	},
    { 
		id: 6,    
		productName: "CONVERSE ZIP 70`S HIGH",            
		price: 115,     
		color: 'BLACK / WHITE',     
		description: "Beskrivning6",   
		mainImage: "img/asd.jpg"
	}
];

/*
*
* Loopen för produkter
*
*/
let insideHTML = "";

products.forEach((product, index) => {
	const html = 
		"<br />" +
		"<div class='product row' id='product" + index +"'>" +
			"<div class='col-md-6'>" +
				"<div class='productName'>" +
					"<h4>" + products[index].productName + "</h4>" +
				"</div>" +
				"<div class='productPrice'>" +
					"<h6>" + products[index].price + "kr</h6>" +
				"</div>" +
				"<div class='productDescription'>" +
					"<p>" + products[index].description + "</p>" +
				"</div>" +
				"<div class='leaveReview'>" +
					"<p onClick='initLeaveReview(" + index + ")'>Lämna recension</p>" +
				"</div>" +
				"<button class='add-to-cart btn btn-primary'> Köp </button>" +
			"</div>" +
			"<div class='productImage col-md-6'>" +
				"<img class='img-fluid rounded mb-3 mb-md-0' src='" + products[index].mainImage + "'>" +
			"</div>" +
		"</div>";
		insideHTML += html;
});

//Draw the shoppingcart
let productList = $('#products');
productList.html(insideHTML);





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