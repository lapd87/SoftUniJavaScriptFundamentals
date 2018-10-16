function aggreagate(input) {

    let sum = 0;
    let sumDivided = 0;
    let concat = "";

    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        sum += num;
        sumDivided += 1 / num;
        concat += num;
    }

    console.log(sum);
    console.log(sumDivided);
    console.log(concat);

}

aggreagate([1, 2, 3]);