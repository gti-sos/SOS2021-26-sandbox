
var express = require("express");
var path = require("path");

var app = express();

var port = (process.env.PORT || 10000);

app.use("/", express.static(path.join(__dirname, "/l05/public")));

/*app.get("/", (req,res) => {
    res.send("<html><body><h1>Hello from this tiny server</h1></body></html>");
});*/

app.get("/info/culturaBASE", (req, res) => {
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
    
    <h3> <a href=" http://estadisticas.mecd.gob.es/CulturaDynPx/culturabase/index.htm?type=pcaxis&path=/t20/p20/a2005/&file=pcaxis#"> Enlace de referencia </a>
    </h3>

    <h5><a href=" https://sos2021-26-sandbox-v99.herokuapp.com/info/air_routes"> tabla by darlopvil </a></h5>
    <h5><a href=" https://sos2021-26-sandbox-v99.herokuapp.com/info/culturaBASE"> tabla by josemcay1 </a></h5>
    <h5><a href=" https://sos2021-26-sandbox-v99.herokuapp.com/info/hostelry"> tabla by keffren </a></h5>
    
    <table>
      <colgroup>
        <col style="background-color:#f2f2f2">
      </colgroup>
      <tr>
        <th>districts</th>
        <th>years</th>
        <th>fundraising</th>
        <th>spectators</th>
        <th>spending_per_view</th>
      </tr>
      <tr>
        <td>Andalucia</td>
        <td>2019</td>
        <td>88.3</td>
        <td>16.4</td>
        <td>5.4</td>
      </tr>
      <tr>
        <td>Andalucia</td>
        <td>2018</td>
        <td>82.0</td>
        <td>15.1</td>
        <td>5.4</td>
      </tr>

      <tr>
        <td>Madrid</td>
        <td>2019</td>
        <td>134.3</td>
        <td>20.7</td>
        <td>6.5</td>
      </tr>

      <tr>
        <td>Madrid</td>
        <td>2018</td>
        <td>127.8</td>
        <td>19.3</td>
        <td>6.6</td>
      </tr>

      <tr>
        <td>Ceuta y Melilla</td>
        <td>2019</td>
        <td>0.6</td>
        <td>0.1</td>
        <td>5.1</td>
      </tr>
    </table>
    
    </body>
    </html>`);
});

app.get("/info/air_routes", (req, res) => {
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
  
  <h3> <a href=" https://www.fomento.gob.es/BE/?nivel=2&orden=03000000"> Enlace de referencia </a>
  </h3>

  <h5><a href=" https://sos2021-26-sandbox-v99.herokuapp.com/info/air_routes"> tabla by darlopvil </a></h5>
    <h5><a href=" https://sos2021-26-sandbox-v99.herokuapp.com/info/culturaBASE"> tabla by josemcay1 </a></h5>
    <h5><a href=" https://sos2021-26-sandbox-v99.herokuapp.com/info/hostelry"> tabla by keffren </a></h5>

  <table>
    <colgroup>
      <col style="background-color:#f2f2f2">
    </colgroup>
    <tr>
      <th>districts</th>
      <th>years</th>
      <th>flights</th>
      <th>passengers</th>
      <th>total_goods(kg)</th>
    </tr>
    <tr>
      <td>Madrid</td>
      <td>2020</td>
      <td>158405</td>
      <td>17071089</td>
      <td>401133380</td>
    </tr>
    <tr>
      <td>Cataluña</td>
      <td>2017</td>
      <td>320456</td>
      <td>47262688</td>
      <td>156105304</td>
    </tr>

    <tr>
      <td>Andalucía</td>
      <td>2020</td>
      <td>78777</td>
      <td>7441585</td>
      <td>10561907</td>
    </tr>

    <tr>
      <td>Andalucía</td>
      <td>2019</td>
      <td>194370</td>
      <td>27332163</td>
      <td>12971632</td>
    </tr>

    <tr>
      <td>Madrid</td>
      <td>2019</td>
      <td>417958</td>
      <td>61703370</td>
      <td>558566726</td>
    </tr>
  </table>
  
  </body>
  </html>`);
});

app.listen(port, () => {
  console.log("Dentro callback- Server ready on port " + port);
});
