function binaryLog(input) {

    let result = "";
    for (let i = 0; i < input.length; i++) {
        result+=Math.log2(input[i])
        result += "\r\n";
    }

    console.log(result)
}

binaryLog([256,32]);