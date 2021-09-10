function init() {
    const mensagem = 'Essa é uma mensagem';

    return function () {
        console.log(`1 - Variável: ${mensagem}.`);
        return function () {
            console.log(`2 - Variável: ${mensagem}.`);
            return function () {
                console.log(`3 - Variável: ${mensagem}.`);
            }
        }
    }
}

init()()()();