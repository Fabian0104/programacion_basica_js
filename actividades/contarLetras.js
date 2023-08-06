/* -------- Actividad 1: -------- */
// Esta actividad es una variacion de contarVocales realizada el 5/8/2023

//Declaracion de variables
let texto = 'Montana'
let letras = contarLetras(texto);

//Impresion de datos]
console.log('La palabra ' + texto + ' contiene ' + letras.vocales.length + ' vocales y ' + letras.consonates.length + ' consonantes y son las siguientes:');
console.log('Vocales: [' + letras.vocales + ']');
console.log('Consonantes: [' + letras.consonates + ']');


// Declarar vocales y constantes
const VOCALES = ['a','A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'á','Á', 'é', 'É', 'í', 'Í', 'ó', 'Ó', 'ú', 'Ú'];
const CONSONANTES = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y','Z']

// Cuentra las letras vocales y consonantes dada en:
// @param = texto
function contarLetras(texto) {

    //Declaracion de objeto a retornar con 2 array
    let letrasObjeto = {
        vocales: [],
        consonates: new Array
    }

    // Bucle para iterar sobre el string del parametro: texto
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        let consonan = true;

        //Bucle para iterar en el array de vocales
        for (let i = 0; i < VOCALES.length; i++) {
            const vocal = VOCALES[i];

            if (letra == vocal) {
                letrasObjeto.vocales.push(vocal);
                consonan = false;
                break;
            }
        }

        //Verifica si es necesario buscar en el bucle de consonantes
        if (consonan) {
            for (let i = 0; i < CONSONANTES.length; i++) {
                const consonante = CONSONANTES[i];
    
                if (letra == consonante) {
                    letrasObjeto.consonates.push(consonante);
                    break;
                }
            }
        }
    }

    //Regresa el objeto con los array actualizados
    return letrasObjeto;
}



