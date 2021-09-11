var partes = ['ombro', 'joelho'];
var musica = ['cabeça', ...partes, 'e', 'pé'];
console.log(musica);


function xyz(x, y, z){
    console.log(`x: ${x}, y: ${y}, z: ${z}`)
}

var n = [10,11,12];
xyz(...n);