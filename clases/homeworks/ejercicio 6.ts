function sumasiemprenumero(a: number | string, b: number | string ): number | string{
    typeof a === 'string' ? a = parseInt(a) : a;
    typeof b === 'string' ? b = parseInt(b) : b; 
    return a + b
} //que pasa si yo quisiera concatenar strings con esta funcion?

function sumasiemprestring(a: number | string, b: number | string ): number | string{
    typeof a === 'number' ? a = a.toString() : a;
    typeof b === 'number' ? b = b.toString() : b; 
    return a + b
}

sumasiemprenumero(1,2); //3
sumasiemprestring(1,2); //12
export {}



