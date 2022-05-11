class explorerService {
    static filterByMission(explorers, mission){
       return explorers.filter((explorer) => explorer.mission == mission) //Regresar explorers que tengan la misión dada
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const totalExplorers = explorers.filter((explorer) => explorer.mission == mission)
        return totalExplorers.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersFiltered = explorers.filter((explorer) => explorer.mission == mission);
        const explorersUsernames = explorersFiltered.map((explorer) => explorer.githubUsername);
        
        return explorersUsernames
    }
}

module.exports = explorerService