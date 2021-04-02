var express = require("express");
//var parseador = require("body-parser"); deprecated
var PORT = (process.env.PORT || 10001);
const shortid = require('shortid');
var BASE_API_PATH = "/api/v1";
var port2 = (process.env.port2 || 10002);

var app = express();
app.use(express.json());
app.use("/", express.static("./public"));

//Parte josmaycan1

var culturaBASE = [{
    "district": "Andalucia",
    "year": 2019,
    "fundraising": 88.3,
    "spectator": 16.4,
    "spending-per-view": 5.4
},{
    "district": "Madrid",
    "year": 2019,
    "fundraising": 134.3,
    "spectator": 20.7,
    "spending-per-view": 6.5
}];

app.get(BASE_API_PATH + "/culturaBASE", (req,res)=>{

    res.send(JSON.stringify(culturaBASE, null, 2));
});

app.listen(port2,()=>{
    console.log(`Server ready at ${port2}!`);
});

app.post(BASE_API_PATH+ "/culturaBASE", (req,res) =>{
    var newCB = req.body;
    console(`new contacts: <${JSON.stringify(newCB,null, 2)}>`);
    culturaBASE.push(newCB);
    res.sendStatus(201);
});


/*let culturaBASE = []

app.get(BASE_API_PATH+ "/culturaBASE", (req,res)=>{
    res.status(200).json(culturaBASE);
});

app.post(BASE_API_PATH+ "/culturaBASE", (req,res) =>{
    const cB = req.body;
    cB.id = shortid.generate();
    culturaBASE.push(cB);
    res.status(201).json(cB);
});

app.delete(BASE_API_PATH+ "/culturaBASE/:id", (req,res)=>{
    const {id} = req.params;
    const borrado = culturaBASE.find(cb => cb.id === id );
    if(borrado){
       // culturaBASE = culturaBASE.filter(cb=> cb.id !== id);
        res.status(200).json(borrado);
    }else{
        res.status(404).json({message: "Lo que estás intentando borrar no existe bro"})
    }
});*/

//parte de darlopvil

var air_routes=[
{
    "district" : "Madrid",
    "year": 2020,
    "flight": 158405,
    "passenger": 17071089,
    "merchandise": 401133380

},{
    "district" : "Cataluña",
    "year": 2017,
    "flight": 320456,
    "passenger": 47262688,
    "merchandise": 156105304
}


];

app.get(BASE_API_PATH + "/air-routes", (req,res)=>{

    res.send(JSON.stringify(air_routes, null, 2));
});

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});