function p03(text, command) {

    let nameRegex = / ([A-Z][A-Za-z]*)-(([A-Z][A-Za-z]*\.)-)?([A-Z][A-Za-z]*) /;
    let airportRegex = / ([A-Z]{3})\/([A-Z]{3}) /;
    let flightRegex = / [A-Z]{1,3}\d{1,5} /;
    let companyRegex = /- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*) /;

    let name;
    let fromAirport;
    let toAirport;
    let flight;
    let company;

    switch (command) {
        case"name":
            name = text.match(nameRegex)[0]
                .trim()
                .replace(/-/g, " ");

            console.log(`Mr/Ms, ${name}, have a nice flight!`);
            break;
        case "flight":
            fromAirport = text.match(airportRegex)[1]
                .trim();
            toAirport = text.match(airportRegex)[2]
                .trim();
            flight = text.match(flightRegex)[0]
                .trim();

            console.log(`Your flight number ${flight} is from ${fromAirport} to ${toAirport}.`);
            break;
        case "company":
            company = text.match(companyRegex)[1]
                .trim()
                .replace(/\*/g, " ");

            console.log(`Have a nice flight with ${company}.`);
            break;
        case "all":
            name = text.match(nameRegex)[0]
                .trim()
                .replace(/-/g, " ");
            fromAirport = text.match(airportRegex)[1]
                .trim();
            toAirport = text.match(airportRegex)[2]
                .trim();
            flight = text.match(flightRegex)[0]
                .trim();
            company = text.match(companyRegex)[1]
                .trim()
                .replace(/\*/g, " ");

            console.log(`Mr/Ms, ${name}, your flight number ${flight} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
            break;
    }
}

p03('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
    'all');

p03(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ',
    'flight');