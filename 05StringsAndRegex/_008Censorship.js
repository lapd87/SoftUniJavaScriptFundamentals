function censor(text, censorArr) {

    for (let censorArrKey of censorArr) {
        text = text.split(censorArrKey)
            .join("-".repeat(censorArrKey.length));
    }

    console.log(text);
}

censor('roses are red, violets are blue',
    [', violets are', 'red']);