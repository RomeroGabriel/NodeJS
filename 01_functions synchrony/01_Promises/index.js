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

const userPromise = getUser();

//Onde rola a manipulação quando tiver a promisse resolvida ou falhada
userPromise
    .then((user) => {
        return getTel(user.id).then((tel) => {
            return { user, tel }
        });
    })
    .then((userTel) => {
        return getAddress(userTel.user.id).then((add) => {
            return {
                ...userTel,
                add,
            }
        })
    })
    .then((res) => {
        console.log('Resultado: ', res);
    })
    .catch((err) => {
        console.log('Erro: ', err);
    });