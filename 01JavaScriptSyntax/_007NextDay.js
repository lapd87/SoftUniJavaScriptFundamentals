function nextDay(year, month, day) {

    let today = new Date(year, month - 1, day);
    let tomorrow = new Date(today.getTime()
        + 24 * 60 * 60 * 1000);

    console.log(tomorrow.getFullYear() + '-'
        + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate());
}

nextDay(2016, 9, 30);
nextDay(2019, 12, 31);