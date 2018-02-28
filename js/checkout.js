const requireds = ["firstname", "lastname", "email", "street", "zip", "city"];
let inputs = Array.from(document.getElementsByTagName("input"));


document.getElementById("checkoutForm").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(validate());
    if (!validate()) {
        inputs.filter(x => requireds.indexOf(x.name) >= 0)
            .forEach(x => inputValidation(x));
    } else {
        // submit
        console.log("Everything validated!");
    }
});


function inputValidation(field) {
    if (field.value === "") {
        field.setAttribute("class", "invalid");
        return false;
    } else {
        field.removeAttribute("class", "invalid");
        return true;
    }
}

function validate() {
    return inputs.filter(x => requireds.indexOf(x.name) >= 0 )
    // .forEach(x => inputValidation(x))
        .every(x => inputValidation(x));
}
