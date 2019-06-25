const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.sorteonline.com.br/todas/resultados';

function buscaUltimosResultados() {
    return rp(url).then(function(html) {
        const resultados = {};
        const $ = cheerio.load(html);
        $('.DivDeVisibilidade').each((_, element) => {
            const cheerioElement = $(element);
            const nome = cheerioElement.find('.name').text();
            resultados[nome] = {
                nome: nome,
                premio: cheerioElement.find('.premio.color.bold').text(),
                dataSorteio: cheerioElement
                    .find('.color.header-resultados__datasorteio')
                    .text()
                    .trim(),
                resultado: cheerioElement
                    .find('.result.result-default.center > ul')
                    .text()
                    .split(/\s+/)
                    .filter(s => s != ''),
                numConcurso: cheerioElement
                    .find('.color.header-resultados__nro-concurso')
                    .text()
                    .trim()
            };
            const loteria = resultados[nome];
            switch (nome) {
                case 'Dupla Sena':
                    loteria.resultadoDuplaSena1 = loteria.resultado.slice(0, 6);
                    loteria.resultadoDuplaSena2 = loteria.resultado.slice(6);
                    break;
                case 'Timemania':
                    loteria.timeCoracao = cheerioElement
                        .find('.time-coracao')
                        .text();
                    break;
                case 'Dia de Sorte':
                    loteria.mes = cheerioElement
                        .find('.time-coracao')
                        .text()
                        .trim();
                    break;
                case 'Loteria Federal':
                    cheerioElement.find('ul.federal > li').each((_, li) => {
                        const cheerioLi = $(li);
                        loteria.resultado.push(
                            cheerioLi
                                .find('div.bg')
                                .text()
                                .trim()
                        );
                    });
                    break;
                case 'Loteca':
                    cheerioElement
                        .find('table.result-loteca tr')
                        .each((_, tr) => {
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
