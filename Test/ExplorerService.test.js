// Clase anterior con la que obtenemos los explorers
const Reader = require("../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

const ExplorerSRV = require("../lib/Services/ExplorerService");

describe("Test for Explorer Service Class", () =>{
    test("1. Filter by Mission", () => {
        const Explorer = ExplorerSRV.filterByMission(explorers,"node");
        expect(Explorer[0].mission).toBe("node");
        expect(Explorer[1].mission).toBe("node");
    });

    test("2. Get Amount of Explorers by mission", () => {
        const Explorer = ExplorerSRV.getAmountOfExplorersByMission(explorers,"node");
        expect(Explorer).toBe(10);
    });

    test("3. Get Explorers Username by Mission", () => {
        const Explorer = ExplorerSRV.getExplorersUsernamesByMission(explorers,"node");
        expect(Explorer[0]).toBe("ajolonauta1");
        expect(Explorer[1]).toBe("ajolonauta2");
        expect(Explorer[9]).toBe("ajolonauta15");
    });
});