const buscaUltimosResultados = require('./index');
const rp = require('request-promise');
const fs = require('fs');
const siteMock = fs.readFileSync('./mock.html', 'utf-8');

jest.mock('request-promise');
rp.mockResolvedValue(siteMock);

test('retorna o resultado da Mega-Sena', () =>
    buscaUltimosResultados().then(data => {
        const megasena = {
            nome: 'Mega-Sena',
            premio: 'R$ 2,5 Milhões',
            dataSorteio: '22/06/2019',
            numConcurso: '2162',
            resultado: ['11', '16', '22', '30', '34', '42']
        };
        expect(data['Mega-Sena']).toEqual(megasena);
    }));

test('retorna o resultado da Quina', () =>
    buscaUltimosResultados().then(data => {
        const quina = {
            nome: 'Quina',
            premio: 'R$ 7 Milhões',
            dataSorteio: '14/06/2019',
            numConcurso: '5001',
            resultado: ['12', '32', '45', '64', '80']
        };
        expect(data['Quina']).toEqual(quina);
    }));

test('retorna o resultado da Lotofacil', () =>
    buscaUltimosResultados().then(data => {
        const lotofacil = {
            nome: 'Lotofácil',
            premio: 'R$ 1,5 Milhão',
            dataSorteio: '21/06/2019',
            numConcurso: '1830',
            resultado: '01 03 05 08 10 11 12 14 17 18 19 20 22 23 24'.split(' ')
        };
        expect(data['Lotofácil']).toEqual(lotofacil);
    }));

test('retorna o resultado da Dupla sena', () =>
    buscaUltimosResultados().then(data => {
        const duplaSena = {
            nome: 'Dupla Sena',
            premio: 'R$ 1,7 Milhão',
            dataSorteio: '22/06/2019',
            numConcurso: '1951',
            resultadoDuplaSena1: '05 09 32 37 41 49'.split(' '),
            resultadoDuplaSena2: '10 19 26 33 35 46'.split(' ')
        };
        expect(data['Dupla Sena']).toEqual(duplaSena);
    }));

test('retorna o resultado da Timemania', () =>
    buscaUltimosResultados().then(data => {
        const timemania = {
            nome: 'Timemania',
            premio: 'R$ 4,5 Milhões',
            dataSorteio: '22/06/2019',
            numConcurso: '1347',
            resultado: '22 38 41 44 51 52 70'.split(' '),
            timeCoracao: 'CSA/AL'
        };
        expect(data['Timemania']).toEqual(timemania);
    }));

test('retorna o resultado do Dia de Sorte', () =>
    buscaUltimosResultados().then(data => {
        const diaSorte = {
            nome: 'Dia de Sorte',
            premio: 'R$ 2,7 Milhões',
            dataSorteio: '22/06/2019',
            numConcurso: '166',
            resultado: '06 07 11 19 22 23 25'.split(' '),
            mes: 'Setembro'
        };
        expect(data['Dia de Sorte']).toEqual(diaSorte);
    }));

test('retorna o resultado da Loteria Federal', () =>
    buscaUltimosResultados().then(data => {
        const loteriaFederal = {
            nome: 'Loteria Federal',
            premio: 'R$ 500 Mil',
            dataSorteio: '22/06/2019',
            numConcurso: '5399',
            resultado: '37117 71539 80239 46873 78405'.split(' ')
        };
        expect(data['Loteria Federal']).toEqual(loteriaFederal);
    }));

test('retorna o resultLdo da ', () =>
    buscaUltimosResultados().then(data => {
        const lotiomania = {
            nome: 'Lotomania',
            premio: 'R$ 400 Mil',
            dataSorteio: '21/06/2019',
            numConcurso: '1980',
            resultado: '00 01 08 09 11 15 16 27 54 58 61 63 67 68 69 78 79 89 93 95'.split(
                ' '
            )
        };
        expect(data['Lotomania']).toEqual(lotiomania);
    }));

test('retorna o resultado da Loteca', () =>
    buscaUltimosResultados().then(data => {
        const loteca = {
            nome: 'Loteca',
            premio: 'R$ 200 Mil',
            dataSorteio: '12/06/2019',
            numConcurso: '857',
            resultado: [
                {
                    casa: 'Brasil',
                    casaGols: '03',
                    visitante: 'Bolívia',
                    visitanteGols: '00'
                },
                {
                    casa: 'Venezuela',
                    casaGols: '00',
                    visitante: 'Peru',
                    visitanteGols: '00'
                },
                {
                    casa: 'Argentina',
                    casaGols: '00',
                    visitante: 'Colômbia',
                    visitanteGols: '02'
                },
                {
                    casa: 'Paraguai',
                    casaGols: '02',
                    visitante: 'Qatar',
                    visitanteGols: '02'
                },
                {
                    casa: 'Uruguai',
                    casaGols: '04',
                    visitante: 'Equador',
                    visitanteGols: '00'
                },
                {
                    casa: 'Botafogo/RJ',
                    casaGols: '00',
                    visitante: 'Grêmio/RS',
                    visitanteGols: '01'
                },
                {
                    casa: 'Fortaleza/CE',
                    casaGols: '02',
                    visitante: 'Cruzeiro/MG',
                    visitanteGols: '01'
                },
                {
                    casa: 'CSA/AL',
                    casaGols: '00',
                    visitante: 'Flamengo/RJ',
                    visitanteGols: '02'
                },
                {
                    casa: 'Internacional/RS',
                    casaGols: '03',
                    visitante: 'Bahia/BA',
                    visitanteGols: '01'
                },
                {
                    casa: 'Santos/SP',
                    casaGols: '01',
                    visitante: 'Corinthians/SP',
                    visitanteGols: '00'
                },
                {
                    casa: 'Vasco',
                    casaGols: 'da',
                    visitante: 'X',
                    visitanteGols: '01'
                },
                {
                    casa: 'Atlético/MG',
                    casaGols: '01',
                    visitante: 'São',
                    visitanteGols: '01'
                },
                {
                    casa: 'Chapecoense/SC',
                    casaGols: '01',
                    visitante: 'Fluminense/RJ',
                    visitanteGols: '01'
                },
                {
                    casa: 'Goiás/GO',
                    casaGols: '02',
                    visitante: 'Athlético/PR',
                    visitanteGols: '01'
                }
            ]
        };
        expect(data['Loteca']).toEqual(loteca);
    }));

test('retorna o resultado do Lotogol', () =>
    buscaUltimosResultados().then(data => {
        const lotogol = {
            nome: 'Lotogol',
            premio: 'R$ 400 Mil',
            dataSorteio: '01/06/2019',
            numConcurso: '1054',
            resultado: [
                {
                    casa: 'Botafogo/RJ',
                    casaGols: '1',
                    visitante: 'Vascodagama/RJ',
                    visitanteGols: '0'
                },
                {
                    casa: 'Sãopaulo/SP',
                    casaGols: '1',
                    visitante: 'Cruzeiro/MG',
                    visitanteGols: '1'
                },
                {
                    casa: 'Chapecoense/SC',
                    casaGols: '1',
                    visitante: 'Palmeiras/SP',
                    visitanteGols: '2'
                },
                {
                    casa: 'Bahia/BA',
                    casaGols: '1',
                    visitante: 'Grêmio/RS',
                    visitanteGols: '0'
                },
                {
                    casa: 'Flamengo/RJ',
                    casaGols: '2',
                    visitante: 'Fortaleza/CE',
                    visitanteGols: '0'
                }
            ]
        };
        expect(data['Lotogol']).toEqual(lotogol);
    }));
