function countMap(input) {

    let words = input[0].split(/\W+/g)
        .filter(e => e !== "")
        .map(e => e.toLowerCase());

    let map = new Map();

    for (let i = 0; i < words.length; i++) {
        if (!map.has(words[i])) {
            map.set(words[i], 0);
        }
        map.set(words[i], map.get(words[i]) + 1);
    }

    let mapAsc = new Map([...map.entries()].sort());

    for (let [k, v] of mapAsc) {
        console.log(`'${k}' -> ${v} times`);
    }
}

countMap(["Far too slow, you're far too slow."]);