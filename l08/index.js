var express = require("express");
var bodyParser = require("body-parser");
var Datastore = require("nedb");

/*const cors = require('cors');
const { find } = require("async");
app.use(cors());

app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', '*');
    
    next();
});*/

var db = new Datastore(); //variable que usa el nedb

var PORT = (process.env.PORT || 1607);
var BASE_API_PATH = "/api/v1";

var app = express();

app.use(bodyParser.json());


//Comprobar que la base de datos está vacía
db.find();



var initialContacts = [
    {
        "name": "pablo",
        "phone": 12345
    },
    {
        "name": "pepe",
        "phone": 6789
    }
];

//Inserción de datos

db.insert(initialContacts); //Así metemos los datos de la variable en colección de manera directa



app.get(BASE_API_PATH+"/contacts", (req,res)=>{

    /*db.find({});//Encontrar cosas dentro de la base de datos, si los corchetes están vacíos apuntamos a todos los datos sin distinción*/

    /*db.find({name: "pablo"}); //así encuentra el objeto que tiene como nombre pablo*/

    db.find({}, (err, contacts)=>{ //El contacts es lo que devuelve la base de datos, podemos darle un nombre cualquiera
        if(err){
            console.error("ERROR accessing DB in GET");
            res.sendStatus(500);//Error marcado para acceder al get
        }else{
            var contactsToSend = contacts.map((c)=>{
                //En cada uno de los objetos del get total lo que hacemos es quitar de en medio el id autogenerado y nos devuelve los parámetros que queremos
                return {name: c.name, phone: c.name};
            })
            res.send(JSON.stringify(contactsToSend,null,2));//Ahora devolvemos el nuevo contactsToSend con los filtros
        }
        
    });

    
 });

app.post(BASE_API_PATH+"/contacts", (req,res)=>{
    var newContact = req.body;
    
    console.log(`new contact to be added: <${JSON.stringify(newContact,null,2)}>`);

    db.find({name: newContact.name}, (err, contacts)=>{ //El contacts es lo que devuelve la base de datos, podemos darle un nombre cualquiera
        if(err){
            console.error("ERROR accessing DB in POST");
            res.sendStatus(500);//Error marcado para acceder al get
        }else{
            if(contacts.length == 0){
                console.log("Metemos el contacto nosequé"+JSON.stringify(newContact,null,2));
                db.insert(newContact);
                res.sendStatus(201); //codigo de creacion
            }else{
                res.sendStatus(409); //error de cuando algo ya está en la base de datos
            }
            
        }
        
    });
    contacts.push(newContact);

    res.sendStatus(201);
 });

app.delete(BASE_API_PATH+"/contacts/:name", (req, res)=>{
    var nameToBeDeleted = req.params.name;//recogemos el parametro name de la peticion de borrado

    db.remove({name: nameToBeDeleted}, {}, (err, numContactsRemoved)=>{//metodo para borrar segun el nombre con nedb
        if(err){
            console.error("ERROR accessing DB in Deleteing");
            res.sendStatus(500);
        }else{
            if(numContactsRemoved==0){
                res.sendStatus(404);
            }else{
                res.sendStatus(200);
            }
        }
    });
})


app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});


////Pruebas de culturaBASE con nedb

var r_culturaBASE = [];

app.get(BASE_API_PATH + "/culturaBASE", (req,res) => {
    res.send(JSON.stringify(r_culturaBASE,null,2));
    res.sendStatus(200);
});

app.get(BASE_API_PATH+"/culturaBASE/loadInitialData", (req,res)=>{
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

    r_culturaBASE = initialData;
    res.status(201).json(r_culturaBASE);
});

app.post(BASE_API_PATH + "/culturaBASE", (req,res) => {
    var newResource = req.body;
   
    db.find({district: newResource.district, year: newResource.year}, (err, r_culturaBASE)=>{
        if(err){
            console.error("Ya me estás liando el taco io de verdá");
            res.sendStatus(500);
        }else{
            if(r_culturaBASE.length == 0){
                console.log("Has metido el dato nuevo oleeeeee \n"+ "\n" +JSON.stringify(newResource, null, 2));
                db.insert(newResource);
                res.sendStatus(201);
                ;
            }else{
                console.log("Miarma ese recurso ya existe, lo borra o qué"+JSON.stringify(newResource, null, 2));
                res.sendStatus(409);
            }
        }
        
    });

    r_culturaBASE.push(newResource)
});


//Error para la tabla azul

app.put(BASE_API_PATH + "/culturaBASE", (req,res) => {
    
    console.log(`Error: Use put method at collector object `);
    res.sendStatus(405);
});

app.delete(BASE_API_PATH + "/culturaBASE",(req,res) => {
    r_culturaBASE = [];
    res.sendStatus(200);
});

app.get(BASE_API_PATH+ "/culturaBASE/:urlDistric/:urlYear", (req, res)=>{
    var districtFinded = req.params.urlDistrict;
    var yearFinded = req.params.urlYear;

    db.find({district : districtFinded, year: yearFinded}, (err, cb)=>{
        if(err){
            console.error("Esto no está aquí primo");
            res.sendStatus(500);//Error marcado para acceder al get
        }else{
            var resourceToSend = cb.map((r_c)=>{
                //En cada uno de los objetos del get total lo que hacemos es quitar de en medio el id autogenerado y nos devuelve los parámetros que queremos
                return {name: r_c.name, year: r_c.year};
            })
            res.send(JSON.stringify(resourceToSend,null,2));//Ahora devolvemos el nuevo contactsToSend con los filtros
        }
    });
});

app.get(BASE_API_PATH + "/culturaBASE/:urlDistrict", (req,res) => {

    var {urlDistrict} = req.params;    // == var urlDistrict = req.params.urlDistrict

    var ls_data = [];

    for (var i = 0 ; i < r_culturaBASE.length; i++){
        if(r_culturaBASE[i].district == urlDistrict){
            
            ls_data.push(r_culturaBASE[i]);
        }
    };

    if(ls_data.length == 0){
        res.send('The resource doesn´t exist.')
    }else{
        res.send(JSON.stringify(ls_data,null,2));
    }
   
});



/*app.get(BASE_API_PATH + "/culturaBASE/:urlDistrict/:urlYear", (req,res) => {

    var {urlDistrict} = req.params;
    var {urlYear} = req.params;

    var res_data = {}
    var resourceFinded = false;
    //console.log(req.params);

    for (var i = 0 ; i < r_culturaBASE.length; i++){
        if(r_culturaBASE[i].district == urlDistrict && r_culturaBASE[i].year == urlYear){
            
            res_data = r_culturaBASE[i];
            resourceFinded = true;
        }
    };

    if(!resourceFinded){
        res.send('The resource doesn´t exist.')
    }else{
        res.send(JSON.stringify(res_data,null,2));
    }
   
});*/

//Error para la tabla azul

app.post(BASE_API_PATH + "/culturaBASE/:urlDistrict/:urlYear", (req,res) => {
    console.log(`Error: Use post method at element of collector `);
    res.sendStatus(405);
});

app.delete(BASE_API_PATH+"/culturaBASE/:urlDistrict", (req, res)=>{
    var districtToBeDeleted = req.params.urlDistrict;//recogemos el parametro name de la peticion de borrado

    db.remove({district: districtToBeDeleted}, {}, (err, dataRemoved)=>{//metodo para borrar segun el nombre con nedb
        if(err){
            console.error("ERROR accessing DB in Deleteing");
            res.sendStatus(500);
        }else{
            if(dataRemoved==0){
                res.sendStatus(404);
            }else{
                res.sendStatus(200);
            }
        }
    });
})

/*app.delete(BASE_API_PATH + "/culturaBASE/:urlDistrict", (req,res) => {
    var {urlDistrict} = req.params;

    const deleted = r_culturaBASE.find(resource => resource.district == urlDistrict );

    if(deleted){
        r_culturaBASE = r_culturaBASE.filter(resource => resource.district != urlDistrict);
        res.status(200).json({ message: `The resource with district : <${urlDistrict}> was deleted`})
    }else{
        res.status(404).json({ message: "District you are looking for does not exist "})
    }
});*/


app.delete(BASE_API_PATH + "/culturaBASE/:urlDistrict/:urlYear", (req,res) => {
    var {urlDistrict} = req.params;
    var {urlYear} = req.params;

    const deleted = r_culturaBASE.find(resource => (resource.district == urlDistrict)&&(resource.year == urlYear));

    if(deleted){
        r_culturaBASE = r_culturaBASE.filter(resource => (resource.district == urlDistrict)&&(resource.year != urlYear));
        res.status(200).json({ message: `The resources with district : <${urlDistrict}> and year: <${urlYear}> were deleted`})
    }else{
        res.status(404).json({ message: "The resource you are looking for does not exist "})
    }
});

//Usar formato json al usar POSTMAN !!!!!!!!!!
app.put(BASE_API_PATH + "/culturaBASE/:urlDistrict/:urlYear", (req,res) => {
    var {urlDistrict} = req.params;
    var {urlYear} = req.params;
    const index = r_culturaBASE.findIndex(resource => (resource.district == urlDistrict)&&(resource.year == urlYear));

    if(index == -1){
        res.status(404).json({ message: "The resource you are looking for does not exist "});
    }else{
        r_culturaBASE[index]= req.body;
        res.status(200).json(r_culturaBASE[index]);
    }

});