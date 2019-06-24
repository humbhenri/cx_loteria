const buscaUltimosResultados = require('./lib');
const rp = require('request-promise');
const fs = require('fs');
const siteMock = fs.readFileSync('./mock.html', 'utf-8');

jest.mock('request-promise');
rp.mockResolvedValue(siteMock);

test('retorna alguma coisa', () => {
    return buscaUltimosResultados().then(data => {
        expect(data).toBeTruthy();
    });
});
