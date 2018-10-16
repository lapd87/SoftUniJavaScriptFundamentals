function counter(input) {

    let words = input[0].split(/\W+/g)
        .filter(e => e !== "");

    let count = {};

    for (let i = 0; i < words.length; i++) {
        if (!count.hasOwnProperty(words[i])) {
            count[words[i]] = 0;
        }
        count[words[i]]++;
    }

    console.log(JSON.stringify(count));
}

counter(["Far too slow, you're far too slow."]);