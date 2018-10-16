function diagonals(input) {

    let matrix = input.map(row => row.split(" ").map(Number));

    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        primary += +matrix[i][i];
        secondary += +matrix[i][matrix[i].length - 1 - i];
    }

    if (primary === secondary) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col
                    && col !== matrix[row].length - 1 - row) {
                    matrix[row][col] = primary;
                }
            }
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\r\n"));
}

diagonals(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);