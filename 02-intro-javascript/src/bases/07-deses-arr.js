

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes; //Selecciona el nombre y con f2 cambias el nombre en todo el archivo
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. El segundo valor del arr se llamará setNombre
const usarEstado = (valor) => {
    return [valor, () => {console.log("Hola mundo")}];
}

//const arr = usarEstado('Goku');
//arr[1]();

const [nombre, setNombre] = usarEstado("Oscar");

console.log(nombre);
setNombre();