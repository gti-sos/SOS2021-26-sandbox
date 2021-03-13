var myInteger = 1;
var myDouble = 1.0;
var myString = "willyrex el mejor";
var myInteger = true;

console.log(myInteger);

myDouble = myDouble + "1"; //Transforma el valor double a string añadiendo el valor string al final y le añade el valor 1 al final

myDouble = myDouble + parseInt(1); //Transformamos el valor double a int y le sumamos 1

var a = 1;
var b = 1;

if(a==b)
    console.log(a + " es igual a " + b);
else
    console.log(a + " no es igual a " + b);

var c = 1;
var d = "1";

//Triple igualdad para hacer comparación del tipo

if(c===d)
    console.log(c + " es igual a " + d);
else
    console.log(c+" no es igual a " + d);

var obj = new Object();//definimos un objeto
var array = new Array();//definimos un array
var mapa = new Map();//definimos un map

a.prop= "xx";

var numbers = new Array();//Creación de array y adición de valores
numbers.push(3,4,5,6);

function log(m){//Declaracion de la funcion para enseñar el mensaje por consola
    console.log(m);
}

//console.log(numbers);


/*for (var i = 0; i < numbers.length; i++){//Iteración clásica de array con for
    log(numbers[i]);
}*/

//numbers.forEach(log);//Podemos iterar el array con forEach en la que pasamos el nombre de la funcion como parametro

/*numbers.forEach(function myLog(n){
    log("mylog: " +n);
});*/

//numbers.forEach(myLog);

numbers.forEach((n) =>{//la => es un equivalente al function con un operador sin nombre
    log("=>: " +n);
});


var newNumbers = numbers.filter((n) =>{
    return (n>3);
});

log(newNumbers);

var s = numbers
.filter((n)=>{
    return(n>3);//filtramos los valores que son mayores de 3
})
.map((n)=>{//recorremos lo filtrado y le añadimos 2
    return n+2;
})
.filter((a,n) => {//lo sumamos todo
    return a+n;
});

log(s);


var contact = new Object();

contact.name= "willy";
contact.phone = "+34 666 66 66 66";

contact = [{"name": "pepe", "phone": "+34 666 66 66 66"},
{"name": "pedro", "phone": "+34 666 66 66 66"},
{"name": "luis", "phone": "+34 666 66 66 66"},
{"name": "jose", "phone": "+34 666 66 66 66"}];//Así se escriben los arrays de objetos

function search(name){//busqueda de contacto
    contact.filter((c)=>{//filtramos el del objeto contact el name si es el mismo que se ha pasado por el search
        return(c.name == name)
    })
    .forEach(log);//se imprime el valor que se ha filtrado con el mismo name
}
search("jose");


