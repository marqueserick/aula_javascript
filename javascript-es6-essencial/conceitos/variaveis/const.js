(()=> {
    const texto = "escopo da funcao";
    console.log(`valor dentro da funcao: ${texto}`);
    if(true){
        const texto = "escopo do if";
        console.log(`valor ao executar o if: ${texto}`);
    }
    //const entende escopo de blocos
    console.log(`valor apos a execucao do if: ${texto}`); 
})();
const name = "Erick";
// não pode ser alterado => name = "Erick";
const user = {
    name: "Erick",
}
//se for um objeto podemos trocar seus atributos
user.name = "Erick Marques";

//nao podemos trocar o objeto
/*user = {
    name:"Erick Marques"
}*/

const persons = ["Joao", "Maria","Jose"]
//é possivel adicionar
persons.push("Ana");
//podemos excluir um item
persons.shift();
//podemos alterar passando o indice
persons[0] = "Lupita Nyong'o";
console.log(persons.join(" / "));