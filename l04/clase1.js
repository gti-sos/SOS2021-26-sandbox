/*El repo de las caritas guapens*/ 
var cool = require("cool-ascii-faces");
/* La aplicación para enseñar las caritas guapens, con el puerto definido*/
var express = require("express");
var app = express();
var port = 10000;
/*Así hacemos la llamada sobre la cara con la petición y la respuesta
Request: Petición al puerto (10000 porque es el que hemos definido) del recurso
Response: Lo que devolvemos sobre la petición que nos ha llegado*/ 
app.get("/cool", (request, response)=> {
    response.send(cool());//Le mandamos la carita
    console.log("New Request to /cool has arrived");//Nos llega el mensaje 
});

/*Puerto por el que se hacen las escuchas de las peticiones junto al mensaje adjuntando el puerto por el que se reciben las mismas*/
app.listen(port, ()=>{
    console.log("Server ready listening on port "+ port);
});

console.log(cool());



