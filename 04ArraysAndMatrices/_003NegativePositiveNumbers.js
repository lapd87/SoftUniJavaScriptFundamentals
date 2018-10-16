function negativePositive(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0) {
            result.push(input[i])
        } else {
            result.unshift(input[i]);
        }
    }

    result.forEach(e => console.log(e));

}

negativePositive([7, -2, 8, 9]);