/* -------- Actividad 1: --------
* Números Fibonacci:
* Escribe una función que devuelva los primeros n números de la secuencia de Fibonacci.
* La secuencia comienza con 0 y 1, y el siguiente número en la secuencia es la suma de los dos números anteriores.
*
* // Ejemplo de uso:
* // console.log(fibonacci(8)); // Debería mostrar [0, 1, 1, 2, 3, 5, 8, 13]
*/

function fibonacci(num) {
    let fibonacciArray = [0,1];
    
    switch (true) {
        case num < 1:
            return console.log('Ingresa un numero mayor a 0');
            break;

        case num === 1 || num === 2:
            return fibonacciArray.slice(0,num);
            break;
        
        default:
            for (let i = 2; i < num; i++) {
                const nuevoValor = fibonacciArray[i - 1] + fibonacciArray[i - 2];
                fibonacciArray.push(nuevoValor);
            }
            return fibonacciArray;
            break;
    }
}

console.log(fibonacci(20));