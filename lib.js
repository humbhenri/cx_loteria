const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.sorteonline.com.br/todas/resultados';

function buscaUltimosResultados() {
    return rp(url).then(function(html) {
        const resultados = [];
        const $ = cheerio.load(html);
        $('.DivDeVisibilidade').each((_, element) => {
            const cheerioElement = $(element);
            resultados.push({
                nome: cheerioElement.find('.name').text(),
                premio: cheerioElement.find('.premio').text()
            });
        });
        return resultados;
    });
}

module.exports = buscaUltimosResultados;
