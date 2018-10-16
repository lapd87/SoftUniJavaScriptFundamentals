function textCounter(searched,text) {

    let count = 0;
    let index = -1;

    while (true) {
        index = text.indexOf(searched, index + 1);
        if (index === -1) {
            console.log(count);
            return;
        }

        count++;
    }
}

textCounter('tt', 'The quick brown fox jumps over ttthe lay dog.');
textCounter('brown', 'The quick brown fox jumps over the lay dog.');