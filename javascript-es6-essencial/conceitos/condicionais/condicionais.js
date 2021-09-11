const array = [0, 1, 2, 3, 4, 5, 6];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(item + ' é um numero par');
    } else {
        console.log(item + ' é um numero ímpar');

    }
});
//else if
array.forEach(item => {
    if (item % 2 === 0) {
        console.log(item + ' é um numero divisivel por 2');
    } else if (item % 3 === 0) {
        console.log(item + ' é um numero divisivel por 3');
    } else if (item % 5 === 0) {
        console.log(item + ' é um numero divisivel por 5');
    }
});

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(item + ' é um numero divisivel por 2');
    }
    if (item % 3 === 0) {
        console.log(item + ' é um numero divisivel por 3');
    }
    if (item % 5 === 0) {
        console.log(item + ' é um numero divisivel por 5');
    }
});

//switch case

var frutas = ['banana', 'mamao'];

frutas.forEach(item => {
    switch (item) {
        case 'banana': console.log(`${item} - R$3,00/kg`); break;
        case 'maca':
        case 'mamao': console.log(`${item} - R$2,00/kg`); break;
        default: console.log('produto não cadastrado'); break;
    }
})