
//Variables y constantes
const nombre = 'Oscar';
const apellido = 'Trujillo';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//var no se debe de usar
if(true) {
    const nombre = 'Peter';
    let valorDado = 6;

    console.log(valorDado, nombre);
}

console.log(valorDado);