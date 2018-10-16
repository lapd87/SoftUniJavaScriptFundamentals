function multiplication(input) {

    let regex = /\b([-]?[0-9]+\.?[0-9]*)[\s*]+([-]?[0-9]+\.?[0-9]*)\b/;

    let result = input;
    while (match = regex.exec(result)) {
        result = result.replace(match[0],eval(match[0]));
    }

    console.log(result);
}

multiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');