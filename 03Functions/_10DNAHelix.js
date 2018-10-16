function DNA(length) {

    let sequence = "ATCGTTAGGG";
    let currentLetter = 0;
    let result = "";

    for (let i = 0; i < length; i++) {
        switch (i % 4) {
            case 0:
                result += `**${sequence[currentLetter % 10]}`;
                result += `${sequence[currentLetter % 10 + 1]}**`;
                result += "\r\n";
                break;
            case 2:
                result += `${sequence[currentLetter % 10]}--`;
                result += `--${sequence[currentLetter % 10 + 1]}`;
                result += "\r\n";
                break;
            case 1:
            case 3:
                result += `*${sequence[currentLetter % 10]}-`;
                result += `-${sequence[currentLetter % 10 + 1]}*`;
                result += "\r\n";
                break;
        }

        currentLetter += 2;
    }

    console.log(result);
}

DNA(4);
DNA(10);