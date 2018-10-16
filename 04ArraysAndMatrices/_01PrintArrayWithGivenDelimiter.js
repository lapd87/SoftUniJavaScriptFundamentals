function printArray(input) {

    let result = input.slice(0, input.length - 1);
    console.log(result.join(input[input.length - 1]));
}

printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);