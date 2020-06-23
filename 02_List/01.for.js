const service = require('./getPeople');

async function main() {
    try {
        const result = await service.getPeople('a');
        const names1 = [];

        console.time('name1');
        for (let i in result.results) {
            const people = result.results[i];
            names1.push(people.name)
        }
        console.timeEnd('name1');

        const names2 = [];
        console.time('name2');
        for (pessoa of result.results) {
            names2.push(pessoa.name);
        }
        console.timeEnd('name2');
    }
    catch (error) {
        console.error('Erro: ', error);
    }

}

main();