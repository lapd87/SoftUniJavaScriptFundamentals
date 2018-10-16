function population(input) {

    let map = new Map();

    for (let i = 0; i < input.length; i ++) {
        let data = input[i].split(" <-> ")
            .filter(e => e !== "");

        let town = data[0];
        let population = +data[1];

        if (!map.has(town)) {
            map.set(town, 0);
        }
        map.set(town, map.get(town) + population);
    }

    for (let [k, v] of map) {
        console.log(`${k} : ${v}`);
    }
}

population(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);