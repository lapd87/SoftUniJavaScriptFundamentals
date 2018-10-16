function json(input) {

    let jsonKeys = input[0].split("|")
        .filter(e => e !== "")
        .map(e => e.trim());
    let firstCol = jsonKeys[0];
    let secondCol = jsonKeys[1];
    let thirdCol = jsonKeys[2];

    let result = [];

    for (let i = 1; i < input.length; i++) {
        let data = input[i].split("|")
            .filter(e => e !== "")
            .map(e => e.trim());

        let town = {};
        town[firstCol] = data[0];
        town[secondCol] = +data[1];
        town[thirdCol] = +data[2];

        result.push(town)
    }

    console.log(JSON.stringify(result));
}

json(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);