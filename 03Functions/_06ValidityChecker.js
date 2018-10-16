function validate(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let firstToZeroDistance = Number.isInteger(Math.sqrt(x1 * x1 + y1 * y1)) ?
        "valid" : "invalid";
    let secondToZeroDistance = Number.isInteger(Math.sqrt(x2 * x2 + y2 * y2)) ?
        "valid" : "invalid";
    let firstToSecondDistance = Number.isInteger(Math.sqrt(Math.pow(x1 - x2, 2)
        + Math.pow(y1 - y2, 2))) ? "valid" : "invalid";

    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstToZeroDistance}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondToZeroDistance}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstToSecondDistance}`);
}

validate([2, 1, 1, 1]);