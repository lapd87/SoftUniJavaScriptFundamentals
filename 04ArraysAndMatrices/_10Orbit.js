function orbit(input) {

    let cols = input[0];
    let rows = input[1];
    let x = input[2];
    let y = input[3];

    for (let row = 0; row < rows; row++) {
        let rowArr = [];

        for (let col = 0; col < cols; col++) {
            let distance = Math.max(Math.abs(row - x), Math.abs(col - y)) < 0 ?
                0 : Math.max(Math.abs(row - x), Math.abs(col - y));
            rowArr.push(1 + distance);
        }

        console.log(rowArr.join(" "));
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);