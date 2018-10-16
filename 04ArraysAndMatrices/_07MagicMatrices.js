function magic(input) {

    let sum = input[0].reduce((a, b) => a + b, 0);


    for (let row = 1; row < input.length; row++) {
        let rowSum = input[row].reduce((a, b) => a + b, 0);

        if (rowSum !== sum) {
            console.log("false");
            return;
        }
    }

    for (let row = 0; row < input.length; row++) {
        let colSum = input.reduce((a, b) => a + b[row], 0);

        if (colSum !== sum) {
            console.log("false");
            return;
        }
    }

    console.log("true");
}

magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

