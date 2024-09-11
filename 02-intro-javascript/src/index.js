const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lng: 34.9233321
    }
};

//console.table(persona);

const persona2 = { ...persona }; //Se usa el spread operator (...) para crear una copia del objeto 'persona', por valor, no por referencia.
persona2.nombre = 'Peter'; //Tipo de mutación incorrecta, copia la referencia, no el valor.

console.log(persona);
console.log(persona2);