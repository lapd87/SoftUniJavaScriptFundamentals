function triangle(size) {
    for (let i = 1; i <= size; i++) {
        console.log("*".repeat(i));
    }

    for (let i = size - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

triangle(1);
triangle(5);
