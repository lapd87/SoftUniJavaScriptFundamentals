function trip(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    let firstSecondDist = Math.sqrt(Math.pow(x1 - x2, 2)
        + Math.pow(y1 - y2, 2));
    let firstThirdDist = Math.sqrt(Math.pow(x1 - x3, 2)
        + Math.pow(y1 - y3, 2));
    let secondThirdDist = Math.sqrt(Math.pow(x2 - x3, 2)
        + Math.pow(y2 - y3, 2));

    let distance123 = firstSecondDist + secondThirdDist;
    let distance132 = firstThirdDist + secondThirdDist;
    let distance213 = firstSecondDist + firstThirdDist;

    let minDistance = Math.min(distance123, distance132, distance213);

    if (distance123 === minDistance) {
        console.log(`1->2->3: ${distance123}`);
    } else if (distance132 === minDistance) {
        console.log(`1->3->2: ${distance132}`);
    } else {
        console.log(`2->1->3: ${distance213}`);
    }
}

trip([-1, -2, 3.5, 0, 0, 2]);