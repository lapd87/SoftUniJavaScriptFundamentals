function lastK(n, k) {

    let sequence = [1];
    for (let i = 0; i < n - 1; i++) {
        let next = 0;
        let start = sequence.length - k < 0 ? 0 : sequence.length - k;
        for (let j = start; j < sequence.length; j++) {
            next += sequence[j];
        }

        sequence.push(next);
    }

    console.log(sequence.join(" "));
}

lastK(6, 3);