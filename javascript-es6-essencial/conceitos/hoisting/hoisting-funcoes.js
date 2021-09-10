function fn(){
    log("Texto de exemplo");//diferente da variavel, nao vai aparecer como undefined
    function log(texto){
        console.log(texto);
    }
}

fn();