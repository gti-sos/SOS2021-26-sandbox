var express = require("express");
var bodyParser = require("body-parser");
var Datastore = require("nedb");

var PORT = (process.env.PORT || 1607);
var BASE_API_PATH = "/api/v1";
var db = new Datastore(); //variable que usa el nedb
var app = express();

app.use(bodyParser.json());

//Comprobar que la base de datos está vacía
db.find();

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});

//tests con culturaBASE
var r_culturaBASE = [];

app.get(BASE_API_PATH + "/culturaBASE", (req,res) => {
    db.find({}, (err, data)=>{
        if(err){
            console.error("ERROR accessing DB in GET");
            res.sendStatus(500);
        }else{
            var cbFinded = data.map((d)=>{
                delete d._id;
                return d;
            });
            res.status(200).json(cbFinded);
        }
    })
});

app.get(BASE_API_PATH +"/culturaBASE/loadInitialData", (req,res)=>{
    var initialData = [
        {
            "district": "Andalucia",
            "year": "2019",
            "fundraising": 88.3,
            "spectator": 16.4,
            "spending-per-view": 5.4
        },{
            "district": "Madrid",
            "year": "2019",
            "fundraising": 134.3,
            "spectator": 20.7,
            "spending-per-view": 6.5
        },
        {
            "district": "Andalucia",
            "year": "2018",
            "fundraising": 82.0,
            "spectator": 15.1,
            "spending-per-view": 5.4
        },{
            "district": "Madrid",
            "year": "2018",
            "fundraising": 127.8,
            "spectator": 19.3,
            "spending-per-view": 6.6
        },
        {
            "district": "Ceuta y Melilla",
            "year": "2019",
            "fundraising": 0.6,
            "spectator": 0.1,
            "spending-per-view": 5.1
        }
    ]

    db.remove({}, {multi:true}); //por si hay recursos dentro del db

    db.insert(initialData, (err, data) =>{
        if (err){
            console.error("No hay info en la database");
        }else{
            console.log("Info añadida");
            res.status(201).json({message: `<${data.length}> Info añadida a la DB`});
        }
    })

    
});
