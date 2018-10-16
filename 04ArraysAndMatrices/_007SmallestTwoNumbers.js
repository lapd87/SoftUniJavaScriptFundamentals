function smallestTwo(input) {
    let result = [];

    for (let i = 0; i < 2; i++) {
        let min = Math.min.apply(Math, input);
        result.push(min);

        let index = input.indexOf(min);
        input.splice(index, 1);
    }

    console.log(result.join(" "));
}

smallestTwo([3, 0, 10, 4, 7, 3]);