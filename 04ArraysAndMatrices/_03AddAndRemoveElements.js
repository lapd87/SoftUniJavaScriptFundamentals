function addRemove(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case"add":
                result.push(i + 1);
                break;
            case "remove":
                result.pop();
                break;
        }
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\r\n"));
    }
}

addRemove(['add',
    'add',
    'add',
    'add']);

addRemove(['add',
    'add',
    'remove',
    'add',
    'add']);