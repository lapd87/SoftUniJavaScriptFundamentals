function occurrences(text, word) {

    let regex = new RegExp(`\\b${word}\\b`, "gi");
    console.log(text.split(regex).length - 1);
}

occurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');

occurrences('How do you plan on achieving that? How? How can you even think of that?', 'how');

occurrences('There was one. Therefore I bought it. I wouldn�t buy it otherwise.', 'there');