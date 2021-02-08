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
//TASK 1 

//OPTION 1: meeting the requirements of the task.
    //While loop is being used throughout the script for being the simplest of the iteration structures.

let matrix = [];

// Creating 'count' function
let count = () => {
  let j=0;
  while (j<10) {
    console.log(j);
  j++}
}

// Pushing function to array
let i=0;
while (i<10) {
  matrix.push(count);
  count();
  console.log(`End of count #${i}`)
  i++;
}


// Option 2: Creating an inmediately invoked function that prints 0-9, 10 times.


let fc = ((n1, n2) => { 
    while (n1<n2) {
      let j=0;
      while (j<10) {
      console.log(j);
      j++} 
      console.log(`End of count #${n1}`);
    n1++;
  }})(0, 10);


//TASK 2

let iife = (function (name) {
    console.log(name);   
  })('Inmediately Invoked Name');

