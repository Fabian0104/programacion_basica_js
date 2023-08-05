/* -------- Actividad 1: --------
* Números Fibonacci:
* Escribe una función que devuelva los primeros n números de la secuencia de Fibonacci.
* La secuencia comienza con 0 y 1, y el siguiente número en la secuencia es la suma de los dos números anteriores.
*
* // Ejemplo de uso:
* // console.log(fibonacci(8)); // Debería mostrar [0, 1, 1, 2, 3, 5, 8, 13]
*/

function fibonacci(n) {

    let fibonacciArray = [0, 1];

    if (n < 1) {
        return console.log('Ingresa un numero mayor o igual a 1')
    } else if (n <= 2) {
        return console.log(fibonacciArray.slice(0, n));
    }

    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return console.log(fibonacciArray);    
}

fibonacci(10);