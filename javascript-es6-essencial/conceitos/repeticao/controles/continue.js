console.log("exemplo da utilizacao do controle continue");
const array = [0,1,2,3,4,5,6];

for(let i=0; i<array.length;i++){
    const element = array[i];

    if(element % 2 ===1){
        continue;
    }
    console.log(element);
}