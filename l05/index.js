console.log("Heyyyyyyyyyy");

var express = require("express");
var path = require("path");

var app = express();

var port = 8000;

//app.use("/", express.static("./l05/public"));

app.use("/", express.static(path.join(__dirname, "/l05/public")));
app.get("/", (req,res) => {
    res.send("<html><body><h1>Hello from this tiny server</h1></body></html>");
});

app.listen(port, () => {
    console.log("Dentro callback- Tamo ready en puerto " +port);
});
