function kElements(input) {
    let k = input[0];

    if (k > input.length - 1) {
        k = input.length - 1;
    }

    let result = [];
    for (let i = 1; i < k + 1; i++) {
        result.push(input[i]);
    }
    console.log(result.join(" "));

    result = [];
    for (let i = input.length - k; i < input.length; i++) {
        result.push(input[i]);
    }
    console.log(result.join(" "));
}

kElements([2, 7, 8, 9]);