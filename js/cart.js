let cartList= {};



//lägg till i kundvagnen
function addToCart(){
    if(this.id in cartList){
        cartList[this.id] +=1;
    } else {
        cartList[this.id] =1;
    }
    console.log(cartList);
    update();
}



// Update function
function update(){
    //Nina-funktion
    let list = findProduct(cartList, products);
    document.getElementById("cartHtml").innerHTML = list;
    updateNumber();
    Array.from(document.getElementsByClassName("add"))
        .forEach(item => item.addEventListener("click", function(){
            console.log(this.parentElement);
            let id = this.parentElement.getAttribute("data-value");

            cartList[id] += 1;

            update()
        }));
    Array.from(document.getElementsByClassName("remove"))
        .forEach(item => item.addEventListener("click", function(){
            console.log(this.parentElement);
            let id = this.parentElement.getAttribute("data-value");

            if(cartList[id] > 1){
                cartList[id] -= 1;
            } else{
                delete cartList[id]
            }

            update()
        }));
}