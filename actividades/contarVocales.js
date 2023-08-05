/* -------- Actividad 1: --------
* Contar vocales en una cadena de texto:
* Escribe una función que cuente la cantidad de vocales (mayúsculas y minúsculas) en una cadena dada y agregalas en un array.
*
* // Ejemplo de uso:
* // console.log(contarVocales("Hola, ¿cómo estás?")); // Debería mostrar 7 y son [o, a, ó, e, á]
*/

const VOCALES = ['a','A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'á','Á', 'é', 'É', 'í', 'Í', 'ó', 'Ó', 'ú', 'Ú'];

function contarVocales(texto) {
    let vocalesTexto = new Array;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        for (let i = 0; i < VOCALES.length; i++) {
            const vocal = VOCALES[i];
            if (letra == vocal) {
                vocalesTexto.push(vocal);
                break;
            }
        }
    }
    //console.log('El número de vocales es: ' + vocalesTexto.length + ' y son las siguientes: [' + vocalesTexto + ']');  
    return vocalesTexto;  
}


/* -------- Actividad 2: --------
* Contar consonantes en una cadena de texto:
* Escribe una función que cuente la cantidad de consonantes (mayúsculas y minúsculas) en una cadena dada y agregalas en un array.
*
* // Ejemplo de uso:
* // console.log(contarConsonantes("Hola, ¿cómo estás?")); // Debería mostrar 7 y son [H, l, c, m, s, t, s]; 
*/

const CONSONANTES = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y','Z']

function contarConsonantes(texto) {
    let consonantesTexto = new Array;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        for (let i = 0; i < CONSONANTES.length; i++) {
            const vocal = CONSONANTES[i];
            if (letra == vocal) {
                consonantesTexto.push(vocal);
                break;
            }
        }
    }
    //console.log('El número de consonantes es: ' + consonantesTexto.length + ' y son las siguientes: [' + consonantesTexto + ']');
    return consonantesTexto;
}

/* -------- Actividad 3: --------
* Integra las funciones anteriores para identificar vocales y consonantes en una cadena de texto:
* Escribe una función que cuente la cantidad de vocales y consonantes (mayúsculas y minúsculas) en una cadena dada y agregalas
* en un array.
*
* // Ejemplo de uso:
* // console.log(vocalesYConsonantes("Hola, ¿cómo estás?")); 
* // Debería mostrar:
* // Hay 7 vocales y 7 consonantes y son:
* // Vocales: [o, a, ó, e, á]
* // Consonantes: [H, l, c, m, s, t, s]; 
*/
  
function contarLetras(texto) {
    let vocales = contarVocales(texto);
    let consonantes = contarConsonantes(texto);

    console.log('Hay ' + vocales.length + ' vocales y ' + consonantes.length + ' consonantes y son las siguientes:');
    console.log('Vocales: [' + vocales + ']');
    console.log('Consonantes: [' + consonantes + ']');
}

contarLetras('palabra separada');
