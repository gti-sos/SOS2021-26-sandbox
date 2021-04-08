var express = require("express");
var bodyParser = require("body-parser");

var lib = require("./lib/lib.js");

lib.myHello();

var PORT = (process.env.PORT || 1607);
var BASE_API_PATH = "/api/v1";

var app = express();

app.use(bodyParser.json());

var contacts = [
    {
        "name": "pablo",
        "phone": 12345
    },
    {
        "name": "pepe",
        "phone": 6789
    }
];

app.get(BASE_API_PATH+"/contacts", (req,res)=>{
    res.send(JSON.stringify(contacts,null,2));
 });

app.post(BASE_API_PATH+"/contacts", (req,res)=>{
    var newContact = req.body;
    
    console.log(`new contact to be added: <${JSON.stringify(newContact,null,2)}>`);

    contacts.push(newContact);

    res.sendStatus(201);
 });

 app.delete(BASE_API_PATH+"/contacts/:contactName", (req,res)=>{
     var contactName = req.params.contactName;
     contacts = contacts.filter((c)=>{
         return (c.name != contactName);
     });
     res.sendStatus(200);
 });

app.listen(PORT,()=>{
    console.log(`Server ready at ${PORT}!`);
});