function calc(a, b, operator) {
    switch (operator) {
        case"+":
            console.log(a + b);
            break;
        case"-":
            console.log(a - b);
            break;
        case"*":
            console.log(a * b);
            break;
        case"/":
            console.log(a / b);
            break;
        default:
            console.log("error");
    }
}

calc(2, 4, '+');