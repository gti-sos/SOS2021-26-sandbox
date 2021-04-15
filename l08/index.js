var express = require("express");
var bodyParser = require("body-parser");
var Datastore = require("nedb");

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

    /*db.find({});//Encontrar cosas dentro de la base de datos, si la plantilla está vacía le metemos los corchetes en vacío*/

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