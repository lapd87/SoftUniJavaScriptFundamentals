function round(input) {
    let num = input[0];
    let precision = input[1];

    if (precision > 15) {
        precision = 15;
    }

    console.log(parseFloat(num.toFixed(precision)));
}

round([3.1415926535897932384626433832795, 2]);