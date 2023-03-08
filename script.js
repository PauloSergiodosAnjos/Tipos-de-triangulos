const readlineSync = require('readline-sync');

let ladoA = readlineSync.questionInt('lado A:\n');
let ladoB = readlineSync.questionInt('lado B:\n');
let ladoC = readlineSync.questionInt('lado C:\n');

if (ladoA === ladoB && ladoB === ladoC) {
    console.log('triangulo equilatero');
} else if (ladoA !== ladoB && ladoB !== ladoC) {
    console.log('triangulo escaleno');
} else {
    console.log('triangulo isosceles');
}


