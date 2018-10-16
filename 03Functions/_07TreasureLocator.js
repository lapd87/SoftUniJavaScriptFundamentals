function treasure(input) {

    let map = [["Tuvalu", 1, 3, 1, 3],
        ["Tokelau", 8, 9, 0, 1],
        ["Samoa", 5, 7, 3, 6],
        ["Tonga", 0, 2, 6, 8],
        ["Cook", 4, 9, 7, 8]];

    for (let i = 0; i < input.length; i += 2) {
        let x = +input[i];
        let y = +input[i + 1];

        for (let island = 0; island < map.length; island++) {
            if (x >= map[island][1] && x <= map[island][2]
                && y >= map[island][3] && y <= map[island][4]) {
                console.log(`${map[island][0]}`);
                break;
            }

            if (island === map.length - 1) {
                console.log("On the bottom of the ocean");
            }
        }
    }
}

treasure([4, 2, 1.5, 6.5, 1, 3]);
treasure([6, 4]);