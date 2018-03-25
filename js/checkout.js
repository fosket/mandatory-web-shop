const required = ["firstname", "lastname", "email", "street", "zip", "city"];
let inputs = $("input");

$("#checkoutForm").submit(event => {
    event.preventDefault();

    const validInputs = inputs.filter((index, element) => {
        return required.includes(element.getAttribute("name"));
    });

    for(let i = 0; i < validInputs.length; i ++) {
        inputValidation(validInputs.eq(i));
    }
});


const inputValidation = field => {
    if (field.val() === "") {
        field.attr("class", "invalid form-control");
    } else {
        field.removeAttr("class", "invalid");
        field.attr("class", "form-control");
    }
}
