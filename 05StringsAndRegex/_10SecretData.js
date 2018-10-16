function hider(input) {

    let clientRegex = /\*[A-Z][A-Za-z]*(?= |\t|$)/g;
    let phoneRegex = /\+[0-9-]{10}(?= |\t|$)/g;
    let idRegex = /![A-Za-z0-9]+(?= |\t|$)/g;
    let basesRegex = /_[A-Za-z0-9]+(?= |\t|$)/g;

    let regexps = [clientRegex, phoneRegex, idRegex, basesRegex];

    let hider = "|";

    for (let i = 0; i < input.length; i++) {
        let result = input[i];

        for (let j = 0; j < regexps.length; j++) {
            result = result.replace(regexps[j],
                    m => hider.repeat(m.length))
        }

        console.log(result);
    }
}

hider(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.']);

hider(['I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work"', 'with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);