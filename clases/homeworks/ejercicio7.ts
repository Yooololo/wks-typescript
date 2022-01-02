export {}
function suma(a: number | string, b: number | string): number | string | void {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + ' ' + b;
    }
    else return 'tuvieja'
}
// Logra que esta funcion tambien concatene strings

let holis = suma(2,3); // 5
let holis2 = suma('hola', 'mundo'); // holamundo
let holis3 = suma('hola', 3); // undefined

console.log(holis, holis2, holis3);