const { getPeople } = require('./getPeople');

async function main() {
    try {
        const { results } = await getPeople('a');
        const pesos = results.map((item) => parseInt(item.height));

        const filtered = results.filter((item) => {
            return item.name.toLowerCase().indexOf(`lars`) !== -1;
        });

        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo;
        }, 0);

        console.log('Pesos: ', pesos);
        console.log('Total: ', total);
    }
    catch (error) {
        console.error('Erro: ', error);
    }
}

main();