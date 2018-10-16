function p01(input) {

    let income = 0;

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(", ");

        let moneyNeeded = 0.8;

        let coins = +data[0];
        let drinkType = data[1];
        let sugar = +data[data.length - 1].replace("'", "");

        if (data[2] === "decaf") {
            moneyNeeded = 0.9;
        }

        if (data[2] === "milk"
            || data[3] === "milk") {
            moneyNeeded += +(moneyNeeded * 0.1).toFixed(1);
        }

        if (sugar !== 0) {
            moneyNeeded += 0.1;
        }

        if (moneyNeeded <= coins) {
            console.log(`You ordered ${drinkType}. Price: ${moneyNeeded.toFixed(2)}$ Change: ${(coins - moneyNeeded).toFixed(2)}$`);
            income += moneyNeeded;
        } else {
            console.log(`Not enough money for ${drinkType}. Need ${(moneyNeeded - coins).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${income.toFixed(2)}$`);
}

p01(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']);