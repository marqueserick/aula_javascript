
const texto = 'texto';
const textSize = texto.length;
console.log(`Tamanho do texto inserido na variavel: ${textSize}`);

const splittedText = texto.split('x');
console.log(`texto delimitado pela funcao split() ${splittedText}`);

const replacedText = 'objeto alterado'.replace('objeto','texto');
console.log(`Texto alterado usando metodo replace(): ${replacedText}`);

const lastChar = texto.slice(-1);
console.log(`ultima letra da variavel: ${lastChar}`);

const withoutLastChar = texto.slice(0,-1);
console.log(`variavel sem a ultima letra: ${withoutLastChar}`);

const secondToEnd = texto.slice(1);
console.log(`variavel sem a primeira letra: ${secondToEnd}`);

const twoFirstChar = texto.substr(0,2);
console.log(`dois primeiros caracteres: ${twoFirstChar}`);

