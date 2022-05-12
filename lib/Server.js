// Usando objeto express
const express = require("express");
// App de Express
const app = express();
app.use(express.json()); // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//HTTP Methods
app.get("/v1/explorers", (req,res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`);
    const explorer1 = {id:1, name: "Jonathan"};
    const explorer2 = {id:2, name: "Bruce"};
    const explorer3 = {id:1, name: "Alejandro"};
    const explorer4 = {id:1, name: "ChechoGod"};

    const explorers = [explorer1,explorer2,explorer3,explorer4];
    res.status(200).json(explorers);
});

// //Regresar un explorer en base a un ID
// app.get('/v1/explorers/:id', (req, res) => {
//     console.log(`Api Explorers GET Request ${new Date()}`)
//     console.log(`Getting Explorer with Id ${req.params.id}`)
//     const explorer = {id:1, name: 'Jona'}

//     res.status(200).json(explorer)
// })

// //Crear un Explorer
// app.post('/v1/explorers/', (req, res) => {
//     console.log(`Api Explorers POST Request ${new Date()}`)
//     const requestBody = req.body //Parámetros de un Cliente 

//     res.status(201).json({message: "Created"})
// })

// //Actualizar datos de un explorer
// app.put('/v1/explorers/:id', (req, res) => {
//     console.log(`Api Explorers PUT Request ${new Date()}`)
//     console.log(`Update Explorer with Id: ${req.params.id}`)

//     const requestBody = req.body //Parámetros de un Cliente 

//     res.status(200).json({message: "Updated!!!"})
// })

// //Eliminar un explorer/usuario
// app.delete(('/v1/explorers/:id'), (req,res) => {
//     console.log(`Api Explorers DELETE Request ${new Date()}`)
//     console.log(`Delete explorer with ID: ${req.params.id}`)
//     const requestBody = req.body //Parámetros del cliente

//     res.status(200).json({message:'Deleted!!'})
// })

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

