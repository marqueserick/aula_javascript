//simplificacao de prototype

class Animal{
    constructor(qtdPatas){
        this.qtdPatas = qtdPatas;
    }

    movimentar(){
        console.log('movimentando');
    }
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = morde;
    }
    latir(){
        console.log('Au Au');
    }
}

const pug = new Cachorro(false);
pug.movimentar();
pug.latir();
console.log(pug);