function printStep(input) {

    let array = input.slice(0, input.length - 1);
    let step = +input[input.length - 1];

    for (let i = 0; i < array.length; i += step) {
        console.log(array[i]);
    }
}

printStep(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);