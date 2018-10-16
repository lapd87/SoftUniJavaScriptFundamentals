function colors(num) {

    let result = "<ul>";
    result += "\r\n";

    for (let i = 1; i <= num; i++) {
        let color = i % 2 === 0 ? 'blue' : 'green';

        result += `\t<li><span style='color:${color}'>${i}</span></li>\r\n`;
    }

    result += "</ul>";

    console.log(result);
}

colors(10);