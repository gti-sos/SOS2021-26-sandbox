var express = require("express");
//var parseador = require("body-parser"); deprecated
var PORT = (process.env.PORT || 10001);

var BASE_API_PATH = "/api/v1";

var app = express();
app.use(express.json());
app.use("/", express.static("./public"));

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