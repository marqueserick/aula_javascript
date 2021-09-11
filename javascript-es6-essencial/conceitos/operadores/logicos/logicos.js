// && and
// || or

var var1 = true && true // retorna true
console.log(var1);
var var1 = true && false // retorna false
console.log(var1);
var var1 = false && true // retorna false
console.log(var1);
var var1 = false && false // retorna false
console.log(var1);
var var1 = 'Gato' && 'Cão' // retorna Cão
console.log(var1);
var var1 = false && 'Gato' // retorna false
console.log(var1);
console.log();
var var1 = true || true // retorna true
console.log(var1);
var var2 = true || false // retorna true
console.log(var1);
var var1 = false || true // retorna true
console.log(var1);
var var1 = false || false // retorna false
console.log(var1);
var var1 = 'Gato' || 'Cão' // retorna Gato
console.log(var1);
var var1 = false || 'Gato' // retorna Gato
console.log(var1);
var var1 = 'Gato' || false // retorna Gato
console.log(var1);

console.log();
// !(Not) - nega a logica
console.log(!true); // imprime false
console.log(!false); //imprime true
console.log(!'Gato');