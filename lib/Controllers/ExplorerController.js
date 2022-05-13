const Reader = require("../utils/Reader");
const ExplorerSRV = require("../Services/ExplorerService");
const FizzBuzzSRV = require("../Services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorerList = Reader.readJsonFile("explorers.json");
        return ExplorerSRV.filterByMission(explorerList,mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorerList = Reader.readJsonFile("explorers.json");
        return ExplorerSRV.getExplorersUsernamesByMission(explorerList,mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorerList = Reader.readJsonFile("explorers.json");
        return ExplorerSRV.getAmountOfExplorersByMission(explorerList,mission);
    }

    static validateNumber(number){
        return FizzBuzzSRV.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;
