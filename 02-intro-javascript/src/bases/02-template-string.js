const nombre = 'Oscar';
const apellido = 'Trujillo';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
`;

console.log(nombreCompleto); //CTRL + Barra espacio para autocompletado

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}


const texto = `Esto es un texto: ${getSaludo(nombre)}`;
console.log(texto);