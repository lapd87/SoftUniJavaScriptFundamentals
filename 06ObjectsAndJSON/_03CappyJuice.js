function juice(input) {

    let juice = new Map();
    let bottles = new Map();


    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(" => ");

        let fruit = data[0];
        let quantity = +data[1];

        if (!juice.has(fruit)) {
            juice.set(fruit, 0);
        }

        juice.set(fruit, juice.get(fruit) + quantity);

        let bottle = Math.floor(juice.get(fruit) / 1000);

        if (bottle !== 0) {
            bottles.set(fruit, bottle);
        }
    }

    for (let [type, count] of bottles) {
        console.log(`${type} => ${count}`);
    }
}

juice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);