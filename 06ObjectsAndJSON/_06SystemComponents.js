function system(input) {

    let systems = new Map();

    for (let i = 0; i < input.length; i++) {
        let [system, component, subcomponent] = input[i]
            .split(" | ");

        if (!systems.has(system)) {
            systems.set(system, new Map());
        }

        if (!systems.get(system).has(component)) {
            systems.get(system).set(component, []);
        }

        systems.get(system).get(component).push(subcomponent);
    }

    let sortedSystems = Array.from(systems.keys())
        .sort((s1, s2) => s1.length - s2.length
            || s1.toLowerCase().localeCompare(s2.toLowerCase()));

    for (let [system, component] of sortedSystems) {
        console.log(system);

        let sortedComponents =


    }

}

system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);