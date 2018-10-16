function radioCrystals(input) {

    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystalThickness = input[i];
        let operations = `Processing chunk ${crystalThickness} microns`;
        operations += "\r\n";

        let operationCount = 0;
        let hasOperation = "";

        while (crystalThickness / 4 >= targetThickness) {
            crystalThickness /= 4;
            operationCount++;
            hasOperation = "Cut";
        }

        transport();

        while (crystalThickness * 0.8 >= targetThickness) {
            crystalThickness *= 0.8;
            operationCount++;
            hasOperation = "Lap";
        }

        transport();

        while (crystalThickness - 20 >= targetThickness) {
            crystalThickness -= 20;
            operationCount++;
            hasOperation = "Grind";
        }

        transport();

        while (crystalThickness - 1 >= targetThickness) {
            crystalThickness -= 2;
            operationCount++;
            hasOperation = "Etch";
        }

        transport();

        if (crystalThickness + 1 === targetThickness) {
            crystalThickness++;

            operations += "X-ray x1";
            operations += "\r\n";
        }

        operations += `Finished crystal ${crystalThickness} microns`;

        console.log(operations);

        function transport() {
            if (hasOperation) {
                operations += `${hasOperation} x${operationCount}`;
                operations += "\r\n";

                hasOperation = "";
                operationCount = 0;

                operations += "Transporting and washing";
                operations += "\r\n";

                crystalThickness = Math.floor(crystalThickness);
            }
        }
    }
}

radioCrystals([1375, 50000]);