function filler(username, email, phone, input) {

    let nameRegex = /<![A-Za-z]+!>/;
    let emailRegex = /<@[A-Za-z]+@>/;
    let phoneRegex = /<\+[A-Za-z]+\+>/;

    for (let i = 0; i < input.length; i++) {
        console.log(input[i].replace(nameRegex, username)
            .replace(emailRegex, email)
            .replace(phoneRegex, phone));
    }
}

filler('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);