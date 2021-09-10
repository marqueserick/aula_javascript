var texto = "variavel global";

(()=> {
    console.log(`valor dentro da funcao: ${texto}`);
    if(true){
        var texto = "variavel local";
        console.log(`valor ao executar o if: ${texto}`);
    }
    //var nao entende escopo de bloco, somente escopo de funcao
    console.log(`valor apos a execucao do if: ${texto}`); 
})();