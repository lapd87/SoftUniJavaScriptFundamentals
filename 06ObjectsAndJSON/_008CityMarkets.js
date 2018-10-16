function market(input) {

    let market = {};

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(/[\->:]+/g)
            .map(e => e.trim())
            .filter(e => e !== "");

        let town = data[0];
        let product = data[1];
        let income = +data[2] * +data[3];

        if (!market.hasOwnProperty(town)) {
            market[town] = {};
        }

        if (!market[town].hasOwnProperty(product)) {
            market[town][product] = 0;
        }

        market[town][product] = market[town][product] + income;
    }

    for (let town in market) {
        if (market.hasOwnProperty(town)) {
            console.log(`Town - ${town}`);

            for (let item in market[town]) {
                if (market[town].hasOwnProperty(item)) {
                    console.log(`$$$${item} : ${market[town][item]}`);
                }
            }
        }
    }

}

market(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);