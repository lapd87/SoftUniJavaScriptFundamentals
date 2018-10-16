function find(input) {

    console.log(input.match(/\b_([A-Za-z0-9]+)\b/g)
        .map(e => e.substring(1)).join(","));
}

find('The _id and _age variables are both integers.');