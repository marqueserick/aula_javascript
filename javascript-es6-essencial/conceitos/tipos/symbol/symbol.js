const symbol1 = Symbol('name');
const symbol2 = Symbol('name');
console.log(`valores das variaveis são iguais?: ${symbol1 === symbol2}`);

const user = {
    [symbol1]: 'Erick',
    [symbol2]: 'Outro Nome',
    lastName: 'Alves',
    age: 26
}

//symbols nao aparece na keys e values do object
console.log(`keys de user: ${Object.keys(user)}`);
console.log(`values de user: ${Object.values(user)}`);

console.log('Symbols registrados em user:', Object.getOwnPropertySymbols(user));
console.log('todas as propriedades de user:', Reflect.ownKeys(user));

//criar um enum
const directions = {
    UP: Symbol('Up'),
    DOWN: Symbol('Down'),
    LEFT: Symbol('Left'),
    RIGHT: Symbol('Right')
}

console.log('todas as propriedades de user:', Reflect.ownKeys(directions));