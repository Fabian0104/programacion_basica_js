/* -------- Actividad 1: --------
* Suma de números pares:
* Escribe una función que reciba un número "n" como parámetro y devuelva la suma de todos los números
* pares desde 1 hasta "n" y agregalos en un array.
*
* // Ejemplo de uso:
* // console.log(sumaNumerosPares(10));  Debería mostrar 30 y son [2, 4, 6, 8, 10]
*/

function sumaNumerosPares(num) {
    let numeroPares = new Array;
    let sumaPares = 0;

    if (num <= 1) {
        return console.log('El numero ' + num + ' no tiene numeros pares anteriores')
    }

    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            numeroPares.push(i);
            sumaPares += i;
        }
    }

    return numeroPares;
}


/* -------- Actividad 2: --------
* Suma de números impares:
* Escribe una función que reciba un número "n" como parámetro y devuelva la suma de todos los números
* impares desde 1 hasta "n".
*
* // Ejemplo de uso:
* // console.log(sumaNumerosImpares(10));  Debería mostrar 25 y son [1, 3, 5, 7, 9]
*/

function sumaNumerosImpares(num) {
    let numeroImpares = new Array;
    let sumaImpares = 0;

    if (num <= 0) {
        return console.log('El numero ' + num + ' no tiene numeros impares anteriores')
    }

    for (let i = 1; i <= num; i++) {
        if (i % 2) {
            numeroImpares.push(i);
            sumaImpares += i;
        }
    }

    return numeroImpares;
}


/* -------- Actividad 3: --------
* Integra las funciones anteriores para identificar pares e impares:
* Escribe una función que reciba un número "n" como parámetro y devuelva la suma de todos los números
* pares y la suma de todos los números impares desde 1 hasta "n".
*
* // Ejemplo de uso:
* // console.log(paresEImpares(10)); 
* // Debería mostrar:
* // Pares: [2, 4, 6, 8, 10] y el total de la suma es: 30
* // Impares: [1, 3, 5, 7, 9] y el total de la suma es: 25
*/

function sumaNumeros(num) {

    let pares = sumaNumerosPares(num);
    let imPares = sumaNumerosImpares(num);

    let totalPar = 0;
    let totalImpar = 0;

    pares.forEach(par => {
        totalPar += par;
    });

    imPares.forEach(imPar => {
        totalImpar += imPar;
    });
    
    let sumaNumeros = totalPar + totalImpar;

    console.log('La suma de todos los numeros anteriores a ' + num + ' es: ' + sumaNumeros);
    console.log('Pares: [' + pares + '] y el total de la suma es: ' + totalPar);
    console.log('Impares: [' + imPares + '] y el total de la suma es: ' + totalImpar);
}