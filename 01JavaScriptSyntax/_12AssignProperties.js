function objectProperties(input) {
    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        object[input[i]] = input[i + 1];
    }

    console.log(object);
}

objectProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);