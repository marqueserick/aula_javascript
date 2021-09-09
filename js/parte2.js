function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    var meuPerfil = "https://www.linkedin.com/in/marqueserick"
    window.open(meuPerfil);//abre numa nova guia
    //window.location.href(meuPerfil) abre na mesma guia
}

function mudartexto(elemento){
    elemento.innerHTML = "Texto modificado";
}

function voltarTexto(elemento){
    elemento.innerHTML = "Passe o cursor nesse texto";
}

function mudandoSelect(elemento){
    console.log(elemento.value);
}