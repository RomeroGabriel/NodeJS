function getUser() {
    return new Promise((resolve, reject) => {
        //Toda consulta externa deve ser feita dentro da promisse
        // Se obter o resultado, usar resolver
        // se ñão, usar reject
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Gerrard'
            })
        }, 1000);
    });
};

function getTel(idUser) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (idUser == 1)
                return resolve({
                    ddd: 14,
                    num: 1234567890,
                });
            else
                reject(new Error('Usuário não encontrado'));
        }, 2000);
    });
};

function getAddress(idUser) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (idUser == 1)
                return resolve({
                    cidade: 'Liverpool',
                    rua: 'Premier league',
                });
            else
                reject(new Error('Usuário não encontrado'));
        }, 1000);
    })
};

main();

async function main() {
    try {
        console.time('promise-start');
        const user = await getUser();
        // Desse modo, telefone e endereço não ocorrem de modo assíncrono
        // sendo que eles não depende um do outro
        // Deixando o código mais lento
        // const tel = await getTel(user.id);
        // const add = await getAddress(user.id);

        const res = await Promise.all([
            getTel(user.id),
            getAddress(user.id)
        ]);
        const tel = res[0];
        const add = res[1];
        console.log(res);
        // Uma melhor prática
        console.log(`
            Nome: ${user.nome},
            Tel: ${tel.ddd} - ${tel.num},
            Add: ${add.cidade} - ${add.rua},
        `);
        console.timeEnd('promise-start');
    }
    catch (error) {
        console.log('Erro mano>: ', error);
    }
}