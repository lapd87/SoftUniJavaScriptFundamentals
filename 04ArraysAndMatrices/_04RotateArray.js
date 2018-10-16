function rotate(input) {

    let array = input.splice(0, input.length - 1);
    let rotations = +input[input.length - 1] % array.length;

    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(" "));
}

rotate(['1',
    '2',
    '3',
    '4',
    '2']);