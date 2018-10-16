function validateEmail(input) {

    if (input.match(/\b[A-Za-z0-9]+@[a-z]+\.[a-z]+\b/)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

validateEmail('valid@email.bg');
validateEmail('invalid@emai1.bg');