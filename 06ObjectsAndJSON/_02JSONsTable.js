function JSONTable(input) {

    let result = "<table>";
    result += "\r\n";

    for (let i = 0; i < input.length; i++) {
        let data = JSON.parse(input[i]);

        result += "\t<tr>";
        result += "\r\n";

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                result += `\t\t<td>${data[key]}</td>`;
                result += "\r\n";
            }
        }

        result += "\t<tr>";
        result += "\r\n";
    }

    result += "</table>";

    console.log(result);
}

JSONTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);