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
}


];

app.get(BASE_API_PATH + "/air-routes", (req,res)=>{

    res.send(JSON.stringify(air_routes, null, 2));
});

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});