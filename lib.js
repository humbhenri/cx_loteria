const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.sorteonline.com.br/todas/resultados';

function buscaUltimosResultados() {
    const options = {
        url: url,
        transform: function (body) { return cheerio.load(body); }
    };
    return rp(options).then(function ($) {
        const resultados = [];
        $('.DivDeVisibilidade').each((_, element) => {
            const cheerioElement = $(element);
            resultados.push({
                nome: cheerioElement.find('.name').text(),
                premio: cheerioElement.find('.premio').text(),
            });
        });
        return resultados;
    });
}

module.exports = buscaUltimosResultados;