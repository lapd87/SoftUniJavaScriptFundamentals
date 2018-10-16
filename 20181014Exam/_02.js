function p02(input) {

    let atm = new Map();
    let totalATMCash = 0;

    for (let i = 0; i < input.length; i++) {

        let commandData = input[i];

        switch (commandData.length) {
            case 1:
                let banknote = +commandData[0];
                let count = atm.get(banknote) !== undefined ?
                    atm.get(banknote) : 0;

                console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`);
                break;
            case 2:
                let balance = +commandData[0];
                let withdraw = +commandData[1];

                if (balance < withdraw) {
                    console.log(`Not enough money in your account. Account balance: ${balance}$.`);
                } else if (totalATMCash < withdraw) {
                    console.log("ATM machine is out of order!");
                } else {
                    let sortedATM = new Map([...atm.entries()]
                        .sort((a, b) => b[0] - a[0]));

                    let leftForWithdraw = withdraw;

                    for (let [banknote, count] of sortedATM) {
                        while (+banknote <= leftForWithdraw
                        && +count > 0) {
                            sortedATM.set(+banknote, +count - 1);
                            leftForWithdraw -= +banknote;
                            count--;
                        }
                    }

                    atm = new Map([...sortedATM.entries()]);
                    totalATMCash -= withdraw;

                    console.log(`You get ${withdraw}$. Account balance: ${balance - withdraw}$. Thank you!`);
                }
                break;
            default:
                let insertedCash = 0;
                for (let banknote of commandData) {
                    if (!atm.has(+banknote)) {
                        atm.set(+banknote, 0);
                    }

                    atm.set(+banknote, atm.get(+banknote) + 1);
                    totalATMCash += +banknote;
                    insertedCash += +banknote;
                }

                console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalATMCash}$.`);
                break;
        }
    }
}

p02([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500]]);