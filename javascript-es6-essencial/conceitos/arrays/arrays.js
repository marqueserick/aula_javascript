var frutas = ['banana', 'mamao'];
//adicionar no array
var frutaAdicionada = frutas.push('acerola') // adiciona e retorna
var primeiraFruta = frutas.unshift('melancia') //adiciona no index 0

var removerFruta = frutas.pop() //remove ultimo elemento (acerola)
var removerPrimeiraFruta = frutas.shift() // remove primeira fruta (melancia)

console.log(frutas);

//find retorna primeiro item que satisfaz a condicao
var fruta = frutas.find(value => value === 'mamao');
console.log(fruta);
//findIndex retorna qual index do item que satisfaz a condicao
var fruta = frutas.findIndex(value => value === 'mamao');
console.log(fruta);
//includes retornar booleano se item estiver no array
console.log('tem maçã na lista?:', frutas.includes('maca') ? 'Sim' : 'Não');
//some tem mesmo retorno mas recebe funcao como parametro
console.log('tem banana na lista?:', frutas.some(value => value === 'banana') ? 'Sim' : 'Não');
//funcao every verifica se todos itens satisfazem condicao
console.log('todos itens são mamao ou banana?:', frutas.every(
    value => value === 'banana' || value === 'mamao') ? 'Sim' : 'Não');

//ordenar elementos de um array
var students = [
    {
        name:'Erick',
        grade:7
    },
    {
        name:'Maria',
        grade:6
    },
    {
        name:'Joao',
        grade:10
    }
]
console.log('lista em ordem de notas crescente', students.sort((current, next) => current.grade - next.grade));
console.log('reverter a ordem do array', frutas.reverse());