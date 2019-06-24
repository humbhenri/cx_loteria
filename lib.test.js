const buscaUltimosResultados = require('./lib');

test('retorna alguma coisa', () => {
    return buscaUltimosResultados().then(data => {
        expect(data).toBeTruthy();
    })
})