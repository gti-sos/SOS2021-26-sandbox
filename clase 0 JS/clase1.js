//Creamos una función de log para futuras instancias
function log(m){ console.log(m);}

var numbers = new Array();
numbers[0] = 1;
numbers[1] = 2;

numbers.push(3);

log(numbers);

var numbers = [2,3,4,5,6];
log(numbers);

//Poco recomendables, dan problemas
for(var i =0; i<numbers.length; i++){
    log(numbers[i]);
}

//Alternativa: Iteradores

//  -forEach
numbers.forEach(log);
//ojo, no poner la funcion con los parentesis log(), solo el nombre!

//Otra forma seria crear la function en la llamada del forEach, en vez de llamarla por fuera.
numbers.forEach(function myLog(n){
    log("mylog: " + n);
});

/*
Esto solo se suele utilizar cuando la funcion que creamos no la volvemos a usar.
Por ello, se puede hasta borrar el nombre de la funcion,
quedando asi:
*/
//###Se llaman funciones lambda, sin nombre###
numbers.forEach(function (n){
    log("mylog: " + n);
});

/*
Ademas, se puede hasta quitar la palabra "function",
cambiando un poco el codigo, metiendo flecha =>
*/

numbers.forEach((n) => {
    log("=>: " + n);
});


//+++++++FILTER+++++++++++++

    //Devolver los nums mayores que 3
var resultado = numbers.filter( (n) => {
    return (n>3);
}
);

log(resultado);

//Forma mas compacta:
var resultado = numbers.filter( (n) => n>3);
log(resultado);

//Encadenar iteradores:
    //Filtrar los resultados del filtro, y los imprimes
numbers.filter( (n) => {
    return (n>3);
}).forEach(log);

//+++++++MAP+++++++
    //En que quiero transformar cada elemento? lo indico
    //Filtrar los numeros mayor que 3, sumarles 2 y de eso, elegir los mayores que 7
    numbers.filter( (n) => {
        return (n>3);
    }).map(
            (n) => {return n+2;}

    ).filter(  
        (n) => n>7
    ).forEach(log);

//++++++REDUCE+++++
/*Acumulador y valor del elemento.
Al principio el acum esta vacio, y luego de todo, tienes que devolverlo.*/

var res = numbers.filter( (n) => {
    return (n>3);
}).map(
        (n) => {return n+2;}

).reduce(  
    (a,n) => a+n);

log(res);

//++++TRABAJANDO CON OBJETOS+++++
var contact = new Object();
contact.name = "pepe";
contact.phone = "+34 123456";

    //inicializo objetos:
    //key, valor
contact = {"name": "pepe", "phone": "+34 123456"}; 

contacts = [ {"name": "pepe", "phone": "+34 123456"},
        {"name": "pedro", "phone": "+34 123456"},
        {"name": "luis", "phone": "+34 123456"},
        {"name": "andres", "phone": "+34 123456"}];
/*Me he creado un array de objetos de tipo contacto. 
Devolver aquellos con un nombre en especifico:*/

function searchConctact (name){
    contacts.filter(
        (c) => {
            return (c.name == name)
        }
    ).forEach(log);
}

searchConctact("pepe");

//Devolver todos los contactos que contengan la letra p:

function searchConctact (nombre){
    contacts.filter(
        (c) => {
            return c.name.match(nombre);
        }
    ).forEach(log);
}

searchConctact("p");
