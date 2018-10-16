function uniques(input) {

    let result = new Set();

    for (let i = 0; i < input.length; i++) {
        let words = input[i].toLowerCase()
            .split(/\W+/g)
            .filter(e => e !== "");

        for (let word of words) {
            result.add(word);
        }
    }

    console.log([...result.values()].join(", "));
}

uniques(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);