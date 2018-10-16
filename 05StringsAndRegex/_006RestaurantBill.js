function bill(input) {

    let purchases = [];
    let totalSum = 0;
    for (let i = 0; i < input.length; i += 2) {
        purchases.push(input[i]);
        totalSum += +input[i + 1];
    }

    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${totalSum}`);
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);