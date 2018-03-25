const required = ["firstname", "lastname", "email", "street", "zip", "city"];
let inputs = $("input");
const checkoutForm = $("#checkoutForm");

/*
 * Validering för formuläret, där den kontrollerar ifall inputfälten har attributen name
 *  har den det så behålls den i listan annars ignoreras den, sedan kollas det ifall fältet är ifyllt
 * är det inte det så får den klassen invalid, annars inte.
 */
checkoutForm.submit(event => {
    event.preventDefault();

    const validInputs = inputs.filter((index, element) => {
        return required.includes(element.getAttribute("name"));
    });

    for(let i = 0; i < validInputs.length; i ++) {
        inputValidation(validInputs.eq(i));
	}
	
	prepareCheckout();
});

/**
 * Ändrar css styling utfirån validering 
 */
const inputValidation = field => {
    if (field.val() === "") {
        field.attr("class", "invalid form-control");
    } else {
        field.removeAttr("class", "invalid");
        field.attr("class", "form-control");
    }
}

/**
 * Förbereda objektet som ska skickas upp till api/orders
 */
const prepareCheckout = () => {
	const serializedForm = checkoutForm.serializeArray();
	const checkoutObject = {};

	serializedForm.forEach(input => {
		checkoutObject[input.name] = input.value;
	});

	const orderItems = [];
	cartProducts.forEach(cathegory => {
		cathegory.forEach(cartItem => {
			orderItems.push(cartItem);
		});
	});

	checkoutObject.orderItems = orderItems;

	checkout(checkoutObject);
};

/**
 * Skicka upp ett objekt till api/orders
 */
const checkout = (order) => {
	$.post("http://demo.edument.se/api/orders", order, (data, status) => {
		console.log(data, status);
	});
};