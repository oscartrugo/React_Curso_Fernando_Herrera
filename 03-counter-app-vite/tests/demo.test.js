describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. Iincialización (Arrange)
        const message1 = 'Hola mundo';
    
        // 2. Estímulo (Act)
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperado (Assert)
        expect(message1).toBe(message2);
    })
})