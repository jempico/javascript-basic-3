//Entrega d'exercicis: Functions & Template Literals


//NIVELL 1
//Task 1

let sayName = x => console.log(x);

sayName('Jemimah');

//NIVELL 2
//Task 1

const nombre = 'Jemimah';
const apellido = 'Pico';

let sayFullName = (x, y) => console.log(`Mi nombre es ${x} ${y}`);

sayFullName(nombre, apellido);

//NIVELL 3
//Task 1 (dos opciones, la primera respetando las directrices del enunciado, la segunda omitiendo la matriz de funciones)

    //Opción 1: Función recursiva con matriz de funciones:

let print1 = function(){ console.log(1); print2()}
let print2 = function(){ console.log(2); print3()}
let print3 = function(){ console.log(3); print4()}
let print4 = function(){ console.log(4); print5()}
let print5 = function(){ console.log(5); print6()}
let print6 = function(){ console.log(6); print7()}
let print7 = function(){ console.log(7); print8()}
let print8 = function(){ console.log(8); print9()}
let print9 = function(){ console.log(9); print10()}
let print10 = function(){ console.log(10);}


let array_of_functions = [print1, print2, print3, print4, print5, print6, print7, print8, print9, print10];

array_of_functions[0]();


    // Opción 2: Función recursiva sin matriz:


let count = (x,y) => {
    if (x<=y) {
        console.log(x);
        x++;
        count(x,y);
    }
}
  
count(1,10);

//Task 2

let anonymous = function(x) {
    console.log(x);
}

anonymous('NoName');
