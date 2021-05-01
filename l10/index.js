var express = require("express");
var path = require("path");
var back = require("./src/backend");
var front = require("./src/frontend");

var app = express();

var port = (process.env.PORT || 10000);

var contacts = [{name:"pedro", phone:"1234"}, {name: "luis", phone: "4567"}];

app.use("/", express.static(path.join(__dirname,"public")));

app.get("/hello", (req, res) => {
    res.send("<html><body><h1>GET Hello from this tiny server</h1></body></html>");
});

app.post("/hello", (req, res) => {
    res.send("<html><body><h1>POST Hello from this tiny server</h1></body></html>");
});


app.get("/contacts", (req, res) => {
    res.send(contacts);
});

app.listen(port, () =>{
    console.log(`Server ready listening on port ${port}`);
});
