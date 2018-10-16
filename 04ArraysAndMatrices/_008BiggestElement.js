function biggest(input) {
    let matrixMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        let arrayMax = Math.max.apply(Math, input[i]);

        if (arrayMax>=matrixMax) {
            matrixMax=arrayMax;
        }
    }

    console.log(matrixMax);
}

biggest([[20, 50, 10], [8, 33, 145]]);