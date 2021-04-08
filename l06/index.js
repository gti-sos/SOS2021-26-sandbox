//const { json } = require("body-parser");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var port = (process.env.port || 1666);

var base_api_path = "/api/v1";

app.use(bodyParser.json());

var contact = [{
    "name": "pablo", "phone":666
},{
    "name": "vegetta", "phone":777
} ];

app.use("/", express.static("l06/public"));

app.listen(port, ()=>{
    console.log("Escuchamos en el puerto " + port);
});

app.get(base_api_path+ "/contacts", (req, res)=>{
    res.send(JSON.stringify(contact,null, 2));
});

app.post(base_api_path+"/contacts", (req,res)=>{
    var newContact = req.body;
    console.log(`new contacts: <${JSON.stringify(newContact,null, 2)}>`);

    contact.push(newContact)
    res.sendStatus(201);
});

//funcion delete: https://youtu.be/K9jTQPb0Xso , https://youtu.be/56jcqnBoYj8

//Delete y put: https://www.codota.com/code/javascript/query/express%40Router%40delete%2Bexpress%40Router%40put

//https://www.codota.com/code/javascript/functions/express/Router/delete

/*app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});*/ 


