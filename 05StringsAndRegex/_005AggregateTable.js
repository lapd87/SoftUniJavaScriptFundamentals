function aggregate(input) {

    let towns = [];
    let totalSum = 0;
    for (let inputKey of input) {
        let data = inputKey.split("|")
            .filter(e => e !== "");

        towns.push(data[0].trim());
        totalSum += +data[1].trim();
    }

    console.log(towns.join(", "));
    console.log(totalSum);
}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);