function capitalize(input) {

    console.log(input.split(/\s/)
        .map(w => w.substring(0, 1).toUpperCase()
            + w.substring(1).toLowerCase())
        .join(" "));
}

capitalize('Capitalize these words');