const buscaUltimosResultados = require('./index');
const rp = require('request-promise');
const fs = require('fs');
const siteMock = fs.readFileSync('./mock.html', 'utf-8');

jest.mock('request-promise');
rp.mockResolvedValue(siteMock);

test('retorna os resultados de todas as loterias', () => {
    return buscaUltimosResultados().then(data => {
        console.log(data);
        const expected = {
            'Mega-Sena': { nome: 'Mega-Sena', premio: 'R$ 2,5 Milhões' },
            'Dupla Sena': { nome: 'Dupla Sena', premio: 'R$ 1,7 Milhão' },
            Timemania: { nome: 'Timemania', premio: 'R$ 4,5 Milhões' },
            'Dia de Sorte': { nome: 'Dia de Sorte', premio: 'R$ 2,7 Milhões' },
            'Loteria Federal': {
                nome: 'Loteria Federal',
                premio: 'R$ 500 Mil'
            },
            Lotomania: { nome: 'Lotomania', premio: 'R$ 400 Mil' },
            Lotofácil: { nome: 'Lotofácil', premio: 'R$ 1,5 Milhão' },
            Quina: { nome: 'Quina', premio: 'R$ 7 Milhões' },
            Loteca: { nome: 'Loteca', premio: 'R$ 200 Mil' },
            Lotogol: { nome: 'Lotogol', premio: 'R$ 400 Mil' }
        };
        expect(data).toEqual(expected);
    });
});
