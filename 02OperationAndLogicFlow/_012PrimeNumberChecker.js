function isPrime(num) {
    if (num < 2) {
        console.log("false");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("false");
            return;
        }
    }
    console.log(num !== 1 && num !== 0);
}

isPrime(81);

