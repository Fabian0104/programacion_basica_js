/* -------- Actividad 1: --------
* Suma de números pares:
* Escribe una función que reciba un número "n" como parámetro y devuelva la suma de todos los números
* pares desde 1 hasta "n" y agregalos en un array.
*

* -------- Actividad 2: --------
* Suma de números impares:
* Escribe una función que reciba un número "n" como parámetro y devuelva la suma de todos los números
* impares desde 1 hasta "n".

* // Ejemplo de uso:
* // console.log(sumaNumerosPares(10));  Debería mostrar 30 y son [2, 4, 6, 8, 10]
*/

function sumaNumerosPares(numPar) {
    let numeros = {
        pares: {
            array: new Array,
            suma: 0,
        },
        impares: {
            array: new Array,
            suma: 0,
        }
    }

    if (numPar < 1) {
        return console.log("Favor de ingresar un numero mayor a 0");
    }
    
    for (let i = 1; i <= numPar; i++) {
        let tipo;
        if (i % 2 === 0) {
            tipo = numeros.pares;
        } else {
            tipo = numeros.impares;
        }
        tipo.array.push(i);
        tipo.suma += i;
    }
    return numeros;
}

let numeros = sumaNumerosPares(10);

console.log('La suma de los numeros pares [' + numeros.pares.array + '] es: ' + numeros.pares.suma);
console.log('La suma de los numeros impares [' + numeros.impares.array + '] es: ' + numeros.impares.suma);

