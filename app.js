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
//Task 1

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
