const Reader = require("../utils/Reader");
const ExplorerSRV = require("../Services/ExplorerService");
const FizzBuzzSRV = require("../Services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorerList = Reader.readJsonFile("explorers.json");
        return ExplorerSRV.GetExplorersByMission(explorerList,mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorerList = Reader.readJsonFile("explorers.json");
        return ExplorerSRV.getExplorersUsernamesByMission(explorerList,mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorerList = Reader.readJsonFile("explorers.json");
        return ExplorerSRV.getExplorersAmonutByMission(explorerList,mission);
    }
}

module.exports = ExplorerController;
