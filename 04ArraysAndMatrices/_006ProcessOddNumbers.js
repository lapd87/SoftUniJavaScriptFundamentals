function odds(input) {
    let result = [];

    for (let i = 1; i < input.length; i += 2) {
        result.unshift(input[i] * 2);
    }

    console.log(result.join(" "));
}

odds([10, 15, 20, 25]);