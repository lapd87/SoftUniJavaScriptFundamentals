function degreeCalc(grads) {

    let degrees = grads / 400 * 360;

    degrees %= 360;

    if (degrees < 0) {
        degrees += 360;
    }

    console.log(degrees);
}

degreeCalc(-50);