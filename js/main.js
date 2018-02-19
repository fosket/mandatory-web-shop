/* Array of products */
var products = [
    { productName: "ADIDAS ORIGINALS ULTRABOOST AT",    price: 240,     color: 'TRIPLE WHITE',      description: "Beskrivning1",    mainImage: "asd.jpg" },
    { productName: "ADIDAS ORIGINALS ULTRABOOST LTD",   price: 220,     color: 'BLACK / WHITE',     description: "Beskrivning2",    mainImage: "asd.jpg" },
    { productName: "CONVERSE ZIP 70`S LOW",             price: 123,     color: 'PURE PLATINUM',     description: "Beskrivning3",    mainImage: "asd.jpg" },
    { productName: "TIMBERLAND 6\" FIELD BOOT WP",      price: 180,     color: 'LIGHT GREY',        description: "Beskrivning4",    mainImage: "asd.jpg" },
    { productName: "TIMBERLAND 6\" PREMIUM BOOT",       price: 220,     color: 'HORWEEN',           description: "Beskrivning5",    mainImage: "asd.jpg" },
    { productName: "CONVERSE ZIP 70`S HIGH",            price: 115,     color: 'BLACK / WHITE',     description: "Beskrivning6",    mainImage: "asd.jpg" }
];


const prices = products.map(function (products) { return products.price; });
console.log("Prices:", prices);





var productText = "";
var i;
for (i = 0; i < products.length; i++) {


    /* Skapa DIV'en 'Product' */
    var para = document.createElement("div");
    para.setAttribute("id", "product product" + i);



    /*    var node = document.createTextNode("product" + i);
        para.appendChild(node);*/


    /* sätt så DIV'en 'Product' är child av DIV'en 'products' */
    var element = document.getElementById("products");
    element.appendChild(para);







    var para1 = document.createElement("div");
    para1.setAttribute("id", "productName" + i);


    /* sätt så DIV'en 'Product' är child av DIV'en 'products' */
    var element1 = document.getElementById("product product" + i);
    element1.appendChild(para1);







    var para1 = document.createElement("productName");
    var para2 = document.createElement("productPrice");
    var para3 = document.createElement("productDescription");
    var para4 = document.createElement("productMainImage");


}

