const ExplorerController = require("../lib/Controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission",(request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request, response) => {
    const mission = request.params.mission;
    const explorersAmount = ExplorerController.getExplorersAmonutByMission(mission);
    
    response.json({mission: request.params.mission, quantity: explorersAmount});
});

app.get("/v1/explorers/usernames/:mission",(request, response) => {
    const mission = request.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    
    response.json({Mission: request.params.mission, Explorers: explorersUsernames});
});

app.get("/v1/fizzbuzz/:score",(request, response) => {
    const Score = request.params.score;
    const Result = ExplorerController.validateNumber(Score);
    
    response.json({score: Score, Trick: Result});
});
