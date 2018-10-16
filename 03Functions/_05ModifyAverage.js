function modifyAVG(input) {

    while (calcAVG(input) <= 5) {
        input += "9";
    }

    console.log(input);

    function calcAVG(num) {
        num = num.toString().split("");
        let avg = 0;

        for (let i = 0; i < num.length; i++) {
            avg += +num[i];
        }

        return avg /= num.length;
    }
}

modifyAVG(101);