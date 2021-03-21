console.log("Heyyyyyyyyyy");

var express = require("express");
var path = require("path");

var app = express();

var port = 8000;

//app.use("/", express.static("./l05/public"));

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
    </html>`)
});

app.listen(port, () => {
    console.log("Dentro callback- Tamo ready en puerto " +port);
});
