function extractIncreasing(input) {

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggest) {
            biggest = input[i];
            console.log(biggest);
        }
    }
}

extractIncreasing([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);