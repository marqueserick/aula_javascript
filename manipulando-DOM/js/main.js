const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const h1 = document.getElementById('titulo-pagina');
const button = document.getElementById('seletor-modo');
const meuBotao = document.getElementById('seletor-modo');

meuBotao.addEventListener('click', mudarModo);

function mudarModo(){
    mudarClasse();
    mudarTexto();
}

function mudarClasse(){
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode'); 
}

function mudarTexto(){
    if(body.classList.contains('dark-mode')){
        h1.innerHTML = 'Dark Mode ON';
        button.innerHTML = 'Light Mode';
    }else{
        h1.innerHTML = "Light Mode ON";
        button.innerHTML = "Dark Mode";
    }
}
/*
function adicionarElemento() {
    //criar elementos
    var divNova = document.createElement("div");
    var novoP = document.createElement("p");
    var conteudoNovo = document.createTextNode("Esse é um novo paragrafo numa nova div");

    //adicionar elementos
    novoP.appendChild(conteudoNovo);
    divNova.appendChild(novoP);
    divNova.classList.add("primeiraDiv"); // adicionando classe na div
    //adicionar novaDiv na página
    var divAtual = document.getElementById("ultimaDiv");
    document.body.insertBefore(divNova, divAtual);
}*/