function company(input) {

    let brands = new Map();

    for (let i = 0; i < input.length; i++) {
        let [brand, model, quantity] = input[i].split(" | ");

        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        if (!brands.get(brand).has(model)) {
            brands.get(brand).set(model, 0);
        }

        brands.get(brand)
            .set(model, brands.get(brand).get(model) + +quantity);
    }

    for (let [brand,modelData] of brands) {
        console.log(brand);

        for (let [model, quantity] of modelData) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

company(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);