function escaping(input) {

    console.log("<ul>");

    for (let inputKey of input) {
        inputKey = inputKey.split("&").join("&amp;");
        inputKey = inputKey.split("<").join("&lt;");
        inputKey = inputKey.split(">").join("&gt;");
        inputKey = inputKey.split('"').join("\\&quot;");

        console.log("  <li>" + inputKey + "</li>");
    }

    console.log("</ul>");
}

escaping(['<b>unescaped text</b>', 'normal text']);
escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);