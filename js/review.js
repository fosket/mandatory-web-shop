let currentReviews = [];
let currentProduct;

/**
 * Starta allting som ska hända när man trycker på en review-länk
 * @param {Number} index produktions position i listan
 */
const initLeaveReview = (index) => {
	showReviewPage();
	currentProduct = products[index];
	$.get("http://demo.edument.se/api/reviews", (reviews) => {
		filterReviews(reviews, index);
	});
}

const filterReviews = (reviews, index) => {
	currentReviews = reviews.filter((review) => {
		return review.ProductID === currentProduct.Id;
	});
	createHTML();
}



/**
 * Anropar alla funktioner som kommer att skapa HTML för de olika sektionerna
 * @param {Number} index produktens position i listan
 */
const createHTML = () => {
	createContainers();
	createReviewProduct();
	createReviewForm();
	createPreviousReviews();
}

/**
 * För att göra koden lättläsligare har de tre containers/rader som
 * recensionssidan består av flyttats till en egen funktion.
 */
const createContainers = () => {
	const reviewPage = $('#reviewPage');
	reviewPage.html(
		'<br />'+ 
		'<div id="reviewProduct" class="row border rounded">' +
		'</div>' +
		'<br />'+ 
		'<div id="reviewForm" class="row border rounded">' +
		'</div>' +
		'<br />'+ 
		'<div class="row">' +
			'<div id="previousReviews" class="col-md-12">' +
			'</div>' +
		'</div>'
	);
}

/**
 * Skapar HTML för produkten som visas överst
 * @param {Object} currentProduct produkten som är i fokus
 */
const createReviewProduct = () => {
	const reviewProduct = $('#reviewProduct');
	reviewProduct.html(
		'<div class="col-md-6">' +
			'<img class="img-fluid" src=' + currentProduct.Image + '>' +
		'</div>' +
		'<div class="col-md-6">' +
			'<p>'+ currentProduct.Name +'</p>' +
			'<p>'+ currentProduct.Description +'</p>' +
			'<p>'+ currentProduct.Price +'</p>' +
		'</div>'
	);
}

/**
 * Skapar HTML för förmuläret där man lämnar sin recension.
 * @param {Number} index hjälp för att indentifiera vilken produkt man recenserar
 */
const createReviewForm = (index) => {
	const reviewForm = $('#reviewForm');
	reviewForm.html(
		'<form class="col-md-12">' +
			'<div class="row">' +
				'<div class="form-group col-md-9">' +
					'<label>Namn</label>' +
					'<input id="reviewName" class="form-control" type="text" name="name" placeholder="Skriv namn här..">' +
				'</div>' +
				'<div class="form-group col-md-3">' +	
				'<label>Betyg</label>' +
					'<select id="reviewRating" class="form-control">' +
						'<option selected value="1">1/5</option>' +
						'<option value="2">2/5</option>' +
						'<option value="3">3/5</option>' +
						'<option value="4">4/5</option>' +
						'<option value="5">5/5</option>' +
					'</select>' +
				'</div>' +
				'<div class="form-group col-md-12">' +
					'<label>Kommentar</label>' +
					'<textarea id="reviewMessage" class="form-control" name="review" cols="30" rows="3" placeholder="Lämna gärna en kommentar här.."></textarea>' +
				'</div>' +
				'<div class="form-group col-md-12">' +
					'<input class="btn btn-primary" type="button" value="Skicka" onclick="leaveReview(' + currentProduct.Id + ')" id="reviewButton">' +
				'</div>' +
			'</div>' +
		'</form>'
	);
}

/**
 * Används för att skapa HTML för föregående reviews.
 * Baserat på vilken position produkten har i listan hämtar vi ut motstvarande
 * position i den lista som innehåller alla lagrade reviews.
 * Sedan skapar vi en ny rad för varje review.
 * @param {Number} index produktens position i listan 
 */
const createPreviousReviews = (index) => {
	const previousReviews = $("#previousReviews");

	let previousReviewsHTML = '';

	currentReviews.forEach((review, index) => {
		const stars = createStars(review.Rating);
		const html = 
			'<div class="row previousReview border rounded">' +
				'<div class="col-md-12">' +
					'<div class="row">' +
						'<div class="col">' +
							'<p class="font-weight-light">' + review.Name + '</p>' +
						'</div>' +
						'<div class="col-12 col-md-auto">' +
							'<div class="reviewStars">' +
								stars +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col">' +
							'<span>Kommentar: </span>' +
							'<p class="font-weight-light">' + review.Comment + '</p>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
		;

		previousReviewsHTML += html;
		previousReviews.html(previousReviewsHTML);

	});
}

/**
 * Skapar HTML för det antalet stjärnor som ska finnas i varje review.
 * Anropas av createPreviousReviews.
 * @param {Number} rating antalet stjärnor
 */
const createStars = (rating) => {
	let starsHTML = '';
	for (let i = 0; i < rating; i++) {
		starsHTML += '<img class="reviewStar" src="./img/star.jpg">';
	}
	return starsHTML;
}

/**
 * Hämtar ut värden från formuläret och placerar ett review-objekt i en
 * två-dimensionell array för att gruppera reviews.
 * Anropar sedan funktioner för att skriva till localstorage och
 * även uppdatera HTML för föregående reviews. 
 */
const leaveReview = (index) => {
	const currentReview = {
		Name: $('#reviewName').val(),
		ProductID: currentProduct.Id,
		Rating: $('#reviewRating').val(),
		Comment: $('#reviewMessage').val()
	}

	$.post("http://demo.edument.se/api/reviews", currentReview, (data, status) => {
		currentReviews.push(data);
		createPreviousReviews();
	});
}


