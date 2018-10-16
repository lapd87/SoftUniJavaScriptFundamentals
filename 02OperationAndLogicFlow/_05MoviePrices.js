function movie(input) {
    let movie = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    let movie1 = ["The Godfather", 12, 10, 15, 12.5, 15, 25, 30];
    let movie2 = ["Schindler's List", 8.5, 15];
    let movie3 = ["Casablanca", 8, 10];
    let movie4 = ["The Wizard of Oz", 10, 15];

    let isError = true;
    for (let i = 1; i <= 7; i++) {
        let dayOfWeek = new Date(2018, 9, i);
        dayOfWeek = dayOfWeek.toLocaleDateString('en-US', {weekday: 'long'});

        if (dayOfWeek.toLowerCase() === day) {
            day = i;
            isError = false;
            break;
        }
    }

    if (isError) {
        console.log("error");
        return;
    }

    if (movie !== movie1[0].toLowerCase()) {
        if (day <= 5) {
            day = 1;
        } else {
            day = 2;
        }
    }

    switch (movie) {
        case movie1[0].toLowerCase():
            console.log(movie1[day]);
            break;
        case movie2[0].toLowerCase():
            console.log(movie2[day]);
            break;
        case movie3[0].toLowerCase():
            console.log(movie3[day]);
            break;
        case movie4[0].toLowerCase():
            console.log(movie4[day]);
            break;
        default:
            console.log("error");
    }
}

movie(['The Godfather', 'Friday']);
movie(['The Godfather', 'Sofia']);
movie(['casablanca', 'sunday']);

