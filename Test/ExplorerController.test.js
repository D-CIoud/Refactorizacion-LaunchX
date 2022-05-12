
const ExplorerCtrll = require("../lib/Controllers/ExplorerController");

describe("Test the method's of ExplorerController", () =>{
    test("1. Explorers by Mission", () => {
        const Explorer = ExplorerCtrll.getExplorersByMission("node");
        expect(Explorer[0].mission).toBe("node");
        expect(Explorer[1].mission).toBe("node");
    });

    test("2. Get Explorers usernames by mission", () => {
        const Explorer = ExplorerCtrll.getExplorersUsernamesByMission("node");
        expect(Explorer[0]).toBe("ajolonauta1");
        expect(Explorer[1]).toBe("ajolonauta2");
        expect(Explorer[9]).toBe("ajolonauta15");
    });

    test("3. Get Explorers Amount by Mission", () => {
        const Explorer = ExplorerCtrll.getExplorersAmonutByMission("node");
        expect(Explorer).toBe(10);
    });
});