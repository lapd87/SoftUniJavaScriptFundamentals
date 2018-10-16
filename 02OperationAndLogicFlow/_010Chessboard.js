function chessboard(size) {
    let result = "<div class=\"chessboard\">";
    result += "\r\n";

    let black = "black";
    let white = "white";

    for (let i = 0; i < size; i++) {
        result += "  <div>";
        result += "\r\n";

        for (let j = 0; j < size; j++) {
            let color = black;

            if ((i + j) % 2 !== 0) {
                color = white;
            }

            result += `    <span class="${color}"></span>`;
            result += "\r\n";
        }

        result += "  </div>";
        result += "\r\n";
    }

    result += "</div>";

    console.log(result);
}

chessboard(3);