var nome = "Erick Marques";
var idade = 26;
//alert(nome + " tem "+idade+" anos");
alert("minha primeira página com javascript");
console.log(nome.replace("Marques","Alves") + " tem "+idade+" anos");


//lista
var lista = ["maçã", "pera","uva"];
console.log("imprimir pera")
console.log(lista[1]);

console.log("adicionar elemento à lista");
lista.push("banana");
console.log(lista);

console.log("retirar ultimo elemento da lista");
lista.pop();
console.log(lista);

console.log("trazer lista ao contrario");
console.log(lista.reverse());

console.log("mostrar tamanho da lista");
console.log(lista.length);

console.log("mostrar lista como String");
console.log(lista.toString());

console.log("converter para String usando outro separador que não a vírgula");
console.log(lista.join(" - "))

console.log("criar dicionario"); // semelhante ao JSON
var fruta = {nome:"Melancia", cor:"vermelha"};
console.log(fruta);
console.log("nome da fruta: "+fruta.nome);
console.log("cor da fruta: "+fruta.cor);

console.log("criar lista de dicionario")
var frutas = [{nome:"uva", cor:"roxa"}, {nome:"banana", cor:"amarela"}];
console.log(frutas);
console.log("imprimir a cor da primeira fruta da lista");
console.log(frutas[0].cor);

//condicional e entrada de dados
idade = prompt("Qual a sua idade?");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

console.log("laço de repetição");
var c = 0;
while(c<5){
    console.log(c+" laço de repetição while");
    c++;
}

for(c=0;c<5;c++){
    console.log(c+" laço de repetição for");
}

console.log('trabalhando com datas');
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getUTCFullYear());

//criando funcoes
function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}
var maioridade = validaIdade(idade);
console.log(maioridade);
alert(soma(5,10))