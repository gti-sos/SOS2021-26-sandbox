
var express = require("express");
var path = require("path");

var app = express();

var port = (process.env.PORT || 10000);

app.use("/", express.static(path.join(__dirname, "/l05/public")));

/*app.get("/", (req,res) => {
    res.send("<html><body><h1>Hello from this tiny server</h1></body></html>");
});*/

app.get("/info/culturaBASE", (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <style>
    table, th, td {
      border: 1px solid black;
    }
    </style>
    </head>
    <body>
    
    <h1>The col element</h1>
    
    <table>
      <colgroup>
        <col span="2" style="background-color:red">
        <col style="background-color:yellow">
      </colgroup>
      <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>3476896</td>
        <td>My first HTML</td>
        <td>$53</td>
      </tr>
      <tr>
        <td>5869207</td>
        <td>My first CSS</td>
        <td>$49</td>
      </tr>
    </table>
    
    </body>
    </html>`);
});


app.get("/info/air_routes", (req,res) => {
    res.send("<html><head><title>Air Routes by darlopvil</title><h1>https://www.fomento.gob.es/BE/?nivel=2&orden=03000000</h1></head><body> <tr><th>districts</th> <th>years</th><th>flights</th><th>passengers</th><th>total_goods(kg)</th>    </tr></body></html>")

});

app.listen(port, () => {
    console.log("Dentro callback- Server ready on port " +port);
});
