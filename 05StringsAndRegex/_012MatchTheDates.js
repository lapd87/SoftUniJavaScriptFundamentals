function dateMatch(input) {

    let regex = /\b(([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4}))\b/g;

    for (let i = 0; i < input.length; i++) {

        while (match = regex.exec(input[i])) {
            console.log(`${match[1]} (Day: ${match[2]}, Month: ${match[3]}, Year: ${match[4]})`);
        }
    }
}

// dateMatch(['I am born on 30-Dec-1994.',
//     'This is not date: 512-Jan-1996.',
//     'My father is born on the 29-Jul-1955.']);
//
// dateMatch(['1-Jan-1999 is a valid date.',
//     'So is 01-July-2000.',
//     'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);

dateMatch(['I dontknow what to test anymore so here are some random dates.',
    '15-May-1996',
    '21-June-1995',
    '31-February-3000',
    'woops that was invalid...',
    '111-Nov-2332',
    '01-January-0001',
    'What the fuck',
    '11-Sep-2001',
    'One minute of silence!']);