function interest(input) {
    let principal = input[0];
    let interest = input[1];
    let interestTime = 12 / input[2];
    let depositTime = input[3];

    let amount = principal * Math.pow(1 + interest / 100 / interestTime,
        interestTime * depositTime);

    console.log(amount.toFixed(2));
}

interest([1500, 4.3, 3, 6]);
interest([100000, 5, 12, 25]);