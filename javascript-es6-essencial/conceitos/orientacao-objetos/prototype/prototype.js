
function Animal(){}
    Animal.prototype.qtdPatas = 0;
    Animal.prototype.movimentar = function(){};

function Cachorro(morde){
    this.qtdPatas = 4;
}
Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au Au')
};

const pug = new Cachorro(false);
pug.latir();
console.log(pug.qtdPatas);
console.log(typeof pug);

Cachorro.prototype.castrado = false;
console.log(pug.castrado);
pug.castrado = true;
console.log(pug.castrado);
