function distance3D(input) {
    let point1 = {x: input[0], y: input[1], z: input[2]};
    let point2 = {x: input[3], y: input[4], z: input[5]};

    let distance2D = Math.sqrt(
        Math.pow(point1.x - point2.x, 2)
        + Math.pow(point1.y - point2.y, 2));

    let distance3D = Math.sqrt(
        Math.pow(distance2D, 2)
        + Math.pow(point1.z - point2.z, 2));

    console.log(distance3D);
}

distance3D([3.5, 0, 1, 0, 2, -1]);
distance3D([1, 1, 0, 5, 4, 0]);