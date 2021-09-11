const mod = 12 % 5; //retorna 2
//incremento e decremento

let a = 1;
let a1 = a++; // primeiro recebe valor da variavel e incrementa a variavel que recebeu
console.log(`a: ${a} a1: ${a1}`);
let b = 1; 
let b1 = --b; //já recebe valor com decremento
console.log(`b: ${b} b1: ${b1}`);

//true =1 false=0

console.log(-3);
var three = +"3" // transforma string em number
console.log(`tipo da variavel three: ${typeof three}`)
console.log(+false);
console.log(+true);
console.log(-true);
const pow = 3 ** 3;
console.log(`valor de 3 elevado a 3: ${pow}`);
//agrupamento
const expression = 3 * (2+6); //valor esperado: 24
console.log(expression);


var x = 1;
var y = 2;
//atribuicao
x = y;

//atribuicao com operacao aritmetica
x= x + y; //ou
x+=y;

x = x*y;
x*=y;

//atribuicao de resto 
x = x%y; //ou
x%=y;
