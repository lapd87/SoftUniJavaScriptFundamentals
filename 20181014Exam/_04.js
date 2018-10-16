function p04(input) {
    function printing(warehouse) {
        let report = [...warehouse.values()].map(e => [...e.values()]);

        console.log(">>>>> REPORT! <<<<<");

        for (let brands of report) {
            console.log(`Brand: ${brands[0]["brand"]}:`);

            for (let coffees of brands) {
                console.log(`-> ${coffees["coffee"]} -> ${coffees["expireString"]} -> ${coffees["quantity"]}.`);
            }
        }
    }

    function printSorted(warehouse) {
        let sortedBrands = new Map([...warehouse.entries()]
            .sort((a, b) => a[0].localeCompare(b[0])));

        let report = [...sortedBrands.values()].map(e => [...e.values()]);

        console.log(">>>>> INSPECTION! <<<<<");

        for (let brands of report) {
            console.log(`Brand: ${brands[0]["brand"]}:`);

            let sortedBrands = brands.sort((a, b) => b["quantity"] - a["quantity"]);

            for (let coffees of sortedBrands) {
                console.log(`-> ${coffees["coffee"]} -> ${coffees["expireString"]} -> ${coffees["quantity"]}.`);
            }
        }
    }


    let warehouse = new Map();

    for (let i = 0; i < input.length; i++) {

        let data = input[i].split(", ");

        let command = data[0];

        let brand;
        let coffee;
        let expireDate;
        let quantity;

        switch (command) {
            case "IN":
                brand = data[1];
                coffee = data[2];
                expireDate = new Date(data[3]);
                quantity = +data[4];

                if (!warehouse.has(brand)) {
                    warehouse.set(brand, new Map());
                }

                if (!warehouse.get(brand).has(coffee)) {
                    warehouse.get(brand).set(coffee, {
                        brand: brand,
                        coffee: coffee,
                        expire: expireDate,
                        expireString: data[3],
                        quantity: quantity
                    });
                } else {
                    let oldDate = warehouse.get(brand)
                        .get(coffee)["expire"];

                    if (oldDate < expireDate) {
                        warehouse.get(brand).set(coffee, {
                            brand: brand,
                            coffee: coffee,
                            expire: expireDate,
                            expireString: data[3],
                            quantity: quantity
                        });
                    } else if (oldDate === expireDate) {
                        warehouse.get(brand)
                            .get(coffee)["quantity"] += quantity;
                    }
                }
                break;
            case "OUT" :
                brand = data[1];
                coffee = data[2];
                expireDate = new Date(data[3]);
                quantity = +data[4];

                if (warehouse.has(brand)) {
                    if (warehouse.get(brand).has(coffee)) {
                        let currentExpireDate = warehouse.get(brand)
                            .get(coffee)["expire"];
                        let currentQuantity = warehouse.get(brand)
                            .get(coffee)["quantity"];

                        if (expireDate < currentExpireDate
                            && quantity <= currentQuantity) {
                            warehouse.get(brand)
                                .get(coffee)["quantity"] -= quantity;
                        }
                    }
                }
                break;
            case "REPORT" :
                printing(warehouse);
                break;
            case "INSPECTION" :
                printSorted(warehouse);
                break;
        }
    }
}

p04([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);