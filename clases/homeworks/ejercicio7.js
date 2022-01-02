"use strict";
exports.__esModule = true;
function suma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + ' ' + b;
    }
    else
        return 'tuvieja';
}
// Logra que esta funcion tambien concatene strings
var holis = suma(2, 3); // 5
var holis2 = suma('hola', 'mundo'); // holamundo
var holis3 = suma('hola', 3); // undefined
console.log(holis, holis2, holis3);
