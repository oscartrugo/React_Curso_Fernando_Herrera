//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona //Extrae los atributos del objeto persona

console.log(nombre); //Imprime los atributos sin necesidad de llamar al objeto
console.log(edad);
console.log(clave);
//console.log(persona.nombre);
//console.log(perosna.nombre);
//console.log(persona.clave);

const usarContexto = ({clave, nombre, edad, rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: 12.3232
        }
    } //Retorna un objeto con propiedades de nombre distinto, pero con el valor de las propiedades del primero
}

const avenger = usarContexto(persona); //A una variable avenger le asigna un objeto con nombreClave y anios.
const {nombreClave, anios, latlng: {lat, lng}} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);