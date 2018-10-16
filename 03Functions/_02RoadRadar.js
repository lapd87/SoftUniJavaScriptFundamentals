function radar(input) {
    let speed = +input[0];
    let location = input[1];
    let limit = 0;

    switch (location) {
        case "residential":
            limit = 20;
            break;
        case "city":
            limit = 50;
            break;
        case "interstate":
            limit = 90;
            break;
        case "motorway":
            limit = 130;
            break;
    }

    if (speed > limit) {
        if (speed - 40 > limit) {
            console.log("reckless driving");
        } else if (speed - 20 > limit) {
            console.log("excessive speeding");
        } else {
            console.log("speeding");
        }
    }
}

radar([40, 'residential']);