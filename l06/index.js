const { json } = require("body-parser");
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
    console.log(`new contacts: <${JSON.stringify(newCB,null, 2)}>`);
    culturaBASE.push(newCB);
    res.sendStatus(201);
});

app.delete(BASE_API_PATH + "/culturaBASE/:district", (req,res)=>{
    var district = req.params.district;
    delete culturaBASE["culturaBase" + req.params.district];
    return res.status(200).json(district);
});

//In progress
app.put(BASE_API_PATH + "/culturaBASE/:district", (req,res)=>{
    var district = req.params.district;
    var updateDistrict = req.body;
    if(culturaBASE["culturaBASE "+ district] != null){
        culturaBASE["culturaBASE" + district] = updateDistrict;
        console(JSON.stringify(updateDistrict,null,4));
        //return con la info updateada
        res.end(JSON.stringify(updateDistrict,null,4));
    }else{
        res.end("El distrito que buscas te lo has inventao campeon " + JSON.stringify(updateDistrict,null,4));
    }
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
},{
    "district": "Andalucía",
    "year": 2020,
    "flight": 78777,
    "passenger": 7441585,
    "merchandise": 10561907
},{
    "district": "Andalucía",
    "year": 2019,
    "flight": 194370,
    "passenger": 27332163,
    "merchandise": 12971632
},{
    "district": "Madrid",
    "year": 2019,
    "flight": 417958,
    "passenger": 61703370,
    "merchandise": 558566726
}];

// GET GENERAL
app.get(BASE_API_PATH + "/air-routes", (req,res)=>{

    res.send(JSON.stringify(air_routes, null, 2));
    res.sendStatus(200);
});

//GET POR RECURSO
app.get(BASE_API_PATH + "/air-routes/Madrid/2020", (req,res)=>{
    
    for(var i=0; i<air_routes.length; i++) {
        if(air_routes[i].district=="Madrid"){
            res.send(JSON.stringify(air_routes[i], null, 2));
        }
    }
    res.sendStatus(200);
});

// POST GENERAL
app.post(BASE_API_PATH + "/air_routes", (req,res)=>{

    var newAirRoute = req.body;
    console.log(`new air route to be added: <${JSON.stringify(newAirRoute,null,2)}>`);
    air_routes.push(newAirRoute);
    res.sendStatus(201);
});


app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});