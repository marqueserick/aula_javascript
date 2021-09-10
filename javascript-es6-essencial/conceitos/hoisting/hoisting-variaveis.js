function fn(){
    console.log(texto); // nao vai dar erro mas variavel é undefined
    var texto = "Exemplo";
    console.log(texto);
}

fn();