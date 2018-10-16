function split(input) {

    console.log(input.split(/[\s.,;()]+/)
        .filter(e => e !== '')
        .join("\r\n"));
}

split('let sum = 4 * 4,b = "wow";');