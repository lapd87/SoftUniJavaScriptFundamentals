function sort(input) {

    input.sort((a, b) => a.length - b.length
        || a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach(e => console.log(e));
}

sort(['test',
    'Deny',
    'omen',
    'Default']);