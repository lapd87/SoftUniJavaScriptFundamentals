function equation(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        console.log((-b - Math.sqrt(discriminant)) / 2 / a);
        console.log((-b + Math.sqrt(discriminant)) / 2 / a);
    } else if (discriminant === 0) {
        console.log(-b / 2 / a);
    } else {
        console.log("No");
    }
}

equation(1, -12, 36);
equation(6, 11, -35);
equation(5, 2, 1);