function inventory(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split("/")
            .map(e => e.trim());

        let items = data.length > 2 ?
            data[2].split(",").map(e => e.trim()) : [];

        let hero = {
            name: data[0],
            level: +data[1],
            items: items
        };

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);