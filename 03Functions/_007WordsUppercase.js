function uppercase(input) {

    let words = input.split(/\W+/);

    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i].toUpperCase());
    }

    console.log(result.filter(s=>s!=='').join(", "));
}

uppercase('Hi, how are you?');