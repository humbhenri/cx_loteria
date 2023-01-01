const buscaUltimosResultados = require('./index');

test('Deve retornar todos os resultados das loterias', () =>
    buscaUltimosResultados().then(resultado => {
        const loterias = Object.keys(resultado);
        expect(loterias.length).toBe(12);
        for (let loteria of loterias) {
            expect(resultado[loteria].nome).not.toBeNull();
            expect(resultado[loteria].premio).toMatch(/R\$/);
            expect(resultado[loteria].dataSorteio).not.toBeNull();
            expect(resultado[loteria].numConcurso).not.toBeNull();
        }
    }));
