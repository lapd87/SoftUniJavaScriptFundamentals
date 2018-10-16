function sumAndVAT(array) {
    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`total = ${sum * 1.2}`);
}

sumAndVAT([1.2, 2.6, 3.5]);