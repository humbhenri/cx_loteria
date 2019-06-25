const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.sorteonline.com.br/todas/resultados';

const loteriaNomeSel = '.name';
const premioSel = '.premio.color.bold';
const dataSorteioSel = '.color.header-resultados__datasorteio';
const resultadoSel = '.result.result-default.center > ul';
const numConcursoSel = '.color.header-resultados__nro-concurso';
const duplaSena = 'Dupla Sena';
const timemania = 'Timemania';
const timemaniaSel = '.time-coracao';
const diaSorte = 'Dia de Sorte';
const diaSorteSel = '.time-coracao';
const loteriaFederal = 'Loteria Federal';
const loteriaFederalSel = 'ul.federal > li';
const loteriaFederalNum = 'div.bg';
const loteca = 'Loteca';
const lotecaSel = 'table.result-loteca tr';
const lotogol = 'Lotogol';
const lotogolSel = 'table.result-lotogol tr';
const loterialSel = '.DivDeVisibilidade';

function buscaUltimosResultados() {
    return rp(url).then(function(html) {
        const resultados = {};
        const $ = cheerio.load(html);
        $(loterialSel).each((_, element) => {
            const cheerioElement = $(element);
            const nome = cheerioElement.find(loteriaNomeSel).text();
            resultados[nome] = {
                nome: nome,
                premio: cheerioElement.find(premioSel).text(),
                dataSorteio: cheerioElement
                    .find(dataSorteioSel)
                    .text()
                    .trim(),
                resultado: cheerioElement
                    .find(resultadoSel)
                    .text()
                    .split(/\s+/)
                    .filter(s => s != ''),
                numConcurso: cheerioElement
                    .find(numConcursoSel)
                    .text()
                    .trim()
            };
            const loteria = resultados[nome];
            switch (nome) {
                case duplaSena:
                    loteria.resultadoDuplaSena1 = loteria.resultado.slice(0, 6);
                    loteria.resultadoDuplaSena2 = loteria.resultado.slice(6);
                    delete loteria.resultado;
                    break;
                case timemania:
                    loteria.timeCoracao = cheerioElement
                        .find(timemaniaSel)
                        .text()
                        .trim();
                    break;
                case diaSorte:
                    loteria.mes = cheerioElement
                        .find(diaSorteSel)
                        .text()
                        .trim();
                    break;
                case loteriaFederal:
                    cheerioElement.find(loteriaFederalSel).each((_, li) => {
                        const cheerioLi = $(li);
                        loteria.resultado.push(
                            cheerioLi
                                .find(loteriaFederalNum)
                                .text()
                                .trim()
                        );
                    });
                    break;
                case loteca:
                    cheerioElement.find(lotecaSel).each((_, tr) => {
                        const jogo = $(tr)
                            .text()
                            .split(/\s+/);
                        loteria.resultado.push({
                            casa: jogo[2],
                            casaGols: jogo[3],
                            visitanteGols: jogo[5],
                            visitante: jogo[6]
                        });
                    });
                    break;
                case lotogol:
                    cheerioElement.find(lotogolSel).each((_, tr) => {
                        const jogo = $(tr)
                            .text()
                            .split(/\s+/);
                        loteria.resultado.push({
                            casa: jogo[2],
                            casaGols: jogo[3],
                            visitanteGols: jogo[5],
                            visitante: jogo[6]
                        });
                    });
                    break;
            }
        });
        return resultados;
    });
}

module.exports = buscaUltimosResultados;
