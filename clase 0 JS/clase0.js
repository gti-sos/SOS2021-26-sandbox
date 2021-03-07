console.log("Hola Mundo");

var a;
a = 1; //no recomendable usar una var que no hayamos declarado previamente.
console.log(a);

var myInteger = 1;
var myDouble = 2.1;
var myString = "2.1";
var myString = 'cadenaSimple';
var myBoolean = true;
console.log("Sacando el double->" +myDouble);
console.log("Sacando el string, machaca lo que hubiese antes en la variable->" + myString);

myDouble = "xxx";
console.log("Sacando el double modificado de antes dinamicamente->" + myDouble); //se puede cambiar el tipo dinamicamente

myDouble = 2.1;
myDouble = myDouble + parseInt(1); //te lo convierte a int sin saber que es, int o string
console.log("Vuelto a cambiar el valor: " + myDouble);

var a =1 ;
var b = "1";  //si ponemos "1" dará lo mismo. No te lo reconoce el tipo
if(a==b)
	console.log(a + " es igual a " + b);
else
  console.log(a + " NO es igual a " + b); 
  
  // == compara valores
  // ==== compara valor y tipo mejor usarlo
  //usar tb "" o ''
if(a===b)
  console.log(a + " es igual a " + b);
else
  console.log(a + " NO es igual a " + b); 
  

var myString = "asadasda"; //acostumbrarse a usar doble comillas o comillas simples, no las dos.


function log(msg){
	console.log(msg);
}

log(1);

var obj = new Object();
obj.prop1 = "a";
obj.prop2 = "b"; //anyadir propiedades dinamicamente al objeto

var array = new Array();
var mapa = new Map();

//Ejemplo para ilustrar que todo en JS es un objeto
var a = 1;
a.prop = "xx";
			