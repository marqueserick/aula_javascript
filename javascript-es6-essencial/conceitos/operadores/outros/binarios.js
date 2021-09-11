//in
var arvores = new Array("pau-brasil","ipê amarelo","ipê roxo","palmeira");
console.log(0 in arvores) // retorna true
console.log(6 in arvores) // retorna false
console.log("pau-brasil" in arvores) //retorna false
var var1 = "length" in arvores;
console.log(var1) //retorna true

//objetos

var meuCarro = {
    marca:'Honda',
    placa:'AAA0000'
}
console.log(`tem marca no meuCarro: `,'marca' in meuCarro)

//instanceOf para saber se um objeto é instancia de outro
var dia = new Date(2021,9,11);
var instancia = dia instanceof Date ? 'é uma instancia de data' : 
'não é uma instancia de data';
console.log(instancia);

