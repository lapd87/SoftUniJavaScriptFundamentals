function employee(input) {

    let regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9- ]*)$/;

    for (let i = 0; i < input.length; i++) {
        let match = regex.exec(input[i]);

        if (match) {
            console.log(`Name: ${match[1]}\r\nPosition: ${match[3]}\r\nSalary: ${match[2]}`);
        }
    }
}

employee(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);

employee(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader']);