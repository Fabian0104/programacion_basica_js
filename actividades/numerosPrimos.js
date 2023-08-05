/* -------- Actividad 1: --------
* Comprobar si un número es primo:
* Escribe una función que verifique si un número dado "n" es primo o no.
* Un número primo es aquel que solo es divisible por 1 y por sí mismo.
*
* // Ejemplo de uso:
* // console.log(esPrimo(17)); // Debería mostrar true
* // console.log(esPrimo(10)); // Debería mostrar false
*/

function esPrimo(num) {

    if (num <= 1) {
        return false;
    };

    for (let i = 2; i <= num / 2; i++) {
        if(num % i === 0){
            return false
        };
    };

    return true;
};


/* -------- Actividad 2: --------
* Agrega en un array todos los números primos anteriores al número "n" dado en la función anterior.
*
* // Ejemplo de uso:
* // console.log(numerosPrimosHastaEl(17)); // Debera imprimir [2, 3, 5, 7, 11, 13, 17]
*/

function numerosPrimosHastaEl(num) {
    let numerosPrimos = new Array;

    if (num <= 1) {
        return console.log('No existen numeros primos antes del numero ' + num);
    };

    for (let i = 2; i < num; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    
    return console.log(numerosPrimos);
}

numerosPrimosHastaEl(88);
