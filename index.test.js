const buscaUltimosResultados = require('./index');

describe('buscaUltimosResultados', () => {
    it('deve retornar os resultados de todas as loterias com a estrutura correta', () => {
        jest.setTimeout(30000);
        return buscaUltimosResultados().then(resultados => {
            const loterias = Object.keys(resultados);
            expect(loterias.length).toBe(11);

            for (const loteria of loterias) {
                const resultado = resultados[loteria];
                expect(resultado).toBeDefined();
                expect(resultado.tipoJogo).toBeDefined();
                expect(resultado.numero).toBeDefined();
                expect(resultado.dataApuracao).toBeDefined();
            }
        });
    }, 30000);
});
