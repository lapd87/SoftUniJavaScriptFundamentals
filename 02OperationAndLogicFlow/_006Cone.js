function coneCals(radius, height) {

    let slant = Math.sqrt(radius * radius + height * height);
    let area = Math.PI * radius * slant + Math.PI * radius * radius;
    let volume = 1 / 3 * Math.PI * radius * radius * height;

    console.log(`volume = ${volume}`);
    console.log(`volume = ${area}`);
}

coneCals(3, 5);