let arr = [3,5,7];
arr.foo = 'Hello';

//exibre indices
for(i in arr){
    console.log(i);
}

//exibe os valores numerados
for(i of arr){
    console.log(i);
}