function match(input) {

    console.log(input.match(/\w+/g).join("|"));
}

match('A Regular Expression needs to have the global flag in order to match all occurrences in the text');