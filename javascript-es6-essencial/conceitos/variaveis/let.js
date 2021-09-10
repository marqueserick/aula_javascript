(()=> {
    let texto = "escopo da funcao";
    console.log(`valor dentro da funcao: ${texto}`);
    if(true){
        let texto = "escopo do if";
        console.log(`valor ao executar o if: ${texto}`);
    }
    //let entende escopo de blocos
    console.log(`valor apos a execucao do if: ${texto}`); 
})();