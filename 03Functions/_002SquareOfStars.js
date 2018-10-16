function square(size) {
    for (let row = 1; row <= size; row++) {
        console.log("* ".repeat(size).trim());
    }
}

square(1);
square(2);
square(5);