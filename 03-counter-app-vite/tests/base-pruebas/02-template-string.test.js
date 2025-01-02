import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-temp´late-string', () => { 
    
    test('getSaludo debe retornar "Hola Oscar"', () => { 

        const name = 'Oscar';
        const message = getSaludo('Oscar');
        
        expect(message).toBe(`Hola ${ name }`);

     })

 })