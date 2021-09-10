const number = 12.4032;

const numberToString = number.toString();
console.log(`Tipo da variavel: ${typeof numberToString}`);

const numberwithTwoDecimals = number.toFixed(2);
console.log(`numero com duas casas decimais ${numberwithTwoDecimals}`);

//transformar string em float
console.log('valor de string para float: '+parseFloat('3.14'));

//transformar string em int
console.log('valor de string para float: '+parseInt('3.14'));