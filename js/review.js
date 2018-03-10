const review = {
    productName: "",
    description: "",
    price: 100,
    productImage:"img/asd.jpg",
    previousReviews: [{
        name:"",
        rating: 4,
        reviewMessage:"",
    }]
}
const hideProductsPage = () => {
    document.getElementById("products").style.display = "none";
}

const leaveReviewLinks = document.getElementsByClassName("leaveReview");
let createReview = (product) => {
    console.log(product.productName);
    const html = ["<p>"+ product.productName +"</p>"
    ];
    const reviewPage = document.getElementById("reviewPage");
    reviewPage.innerHTML = html;
}


for (let i = 0; i < leaveReviewLinks.length; i++){
    leaveReviewLinks[i].addEventListener("click", ()=> {
        hideProductsPage();
        createReview(products[i]);
    });
}