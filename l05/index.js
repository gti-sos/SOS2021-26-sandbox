
var express = require("express");
//var path = require("path");

var app = express();

var port = (process.env.PORT || 10000);

//app.use("/", express.static(path.join(__dirname, "/l05/public")));

app.get("/info/air_routes", (req,res) => {
    res.send("<html><head><title>Air Routes by darlopvil</title><h1>https://www.fomento.gob.es/BE/?nivel=2&orden=03000000</h1></head><body> <tr><th>districts</th> <th>years</th><th>flights</th><th>passengers</th><th>total_goods(kg)</th>    </tr></body></html>")
});

app.listen(port, () => {
    console.log("Dentro callback- Server ready on port " +port);
});
