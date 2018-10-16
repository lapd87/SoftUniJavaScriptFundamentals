function username(input) {

    let users = [];

    for (let email of input) {
        let data = email.split("@");
        let domainFirstLetters = data[1]
            .split(".")
            .map(e => e.charAt(0))
            .join("");
        let user = data[0] + "." + domainFirstLetters;
        users.push(user)
    }

    console.log(users.join(", "));
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);