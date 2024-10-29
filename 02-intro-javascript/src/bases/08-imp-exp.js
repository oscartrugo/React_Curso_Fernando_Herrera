//import {} from './data/heroes'; //Importamos el archivo
import heroes, {owners} from '../data/heroes';//Ctrl  + B. Espacio dentro de las llaves


const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}

const getHeroeByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner);
}


console.log(getHeroeById(5));
console.log(getHeroeByOwner('Marvel'));
console.log(owners);