function multiplication(n) {

    let result = "<table border=\"1\">";
    result += "\r\n";

    for (let row = 0; row <= n; row++) {
        result += " <tr>";
        for (let col = 0; col <= n; col++) {

            let isBold = row === 0 || col === 0;

            if (isBold) {
                result += "<th>";
            } else {
                result += "<td>";
            }

            if (row === 0 && col === 0) {
                result += "x";
            } else if (row === 0) {
                result += col;
            } else if (col === 0) {
                result += row;
            } else {
                result += row * col;
            }

            if (isBold) {
                result += "</th>";
            } else {
                result += "</td>";
            }
        }
        result += "</tr>";
        result += "\r\n";
    }

    result += "</table>";

    console.log(result);
}

multiplication(5);