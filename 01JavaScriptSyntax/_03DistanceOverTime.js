function distance(input) {
    let speedDiff = Math.abs(input[0] - input[1]);
    let distanceM = speedDiff * input[2] / 60 / 60 * 1000;
    console.log(distanceM);
}

distance([11, 10, 120]);