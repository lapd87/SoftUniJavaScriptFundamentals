function html(input) {

    function escapeHtml(unsafe) {
        return ("" + unsafe)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    let data = JSON.parse(input);
    let result = "<table>";

    result += "\r\n";

    result += "  <tr>";

    for (let key in data[0]) {
        if (data[0].hasOwnProperty(key)) {
            result += `<th>${escapeHtml(key)}</th>`;
        }
    }
    result += "</tr>";

    result += "\r\n";

    for (let i = 0; i < data.length; i++) {
        result += "  <tr>";

        for (let key in data[i]) {
            if (data[i].hasOwnProperty(key)) {
                result += `<td>${escapeHtml(data[i][key])}</td>`;
            }
        }

        result += "</tr>";
        result += "\r\n";
    }

    result += "</table>";

    console.log(result);
}


html(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);