function figure(n) {

    let result = "";

    let horizontal = 2 * n - 1;
    let vertical = (n % 2 === 0) ? n - 1 : n;

    if (n === 2) {
        console.log("+++");
        return;
    }

    for (let row = 1; row <= vertical; row++) {
        for (let col = 1; col <= horizontal; col++) {
            if (row === 1
                || row === Math.ceil(vertical / 2)
                || row === vertical) {
                result += (col === 1
                    || col === n
                    || col === horizontal) ? '+' : '-';
            }
            else {
                result += (col === 1
                    || col === n
                    || col === horizontal) ? '|' : ' ';
            }
        }
        result += '\r\n';
    }

    console.log(result);
}

figure(4);
figure(5);