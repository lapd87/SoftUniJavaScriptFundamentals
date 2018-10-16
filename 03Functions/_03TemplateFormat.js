function xml(input) {
    let result = `<?xml version="1.0" encoding="UTF-8"?>`;
    result += "\r\n";
    result += `<quiz>`;
    result += "\r\n";

    for (let i = 0; i < input.length; i += 2) {
        result += `  <question>`;
        result += "\r\n";
        result += `    ${input[i]}`;
        result += "\r\n";
        result += `  </question>`;
        result += "\r\n";
        result += `  <answer>`;
        result += "\r\n";
        result += `    ${input[i + 1]}`;
        result += "\r\n";
        result += `  </answer>`;
        result += "\r\n";
    }
    result += `</quiz>`;

    console.log(result);
}

xml(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);