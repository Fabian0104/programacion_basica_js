// Se instancia un nuevo array llamado frutas
let frutas = new Array;

// Asignación de valor 0 al contador
let contador = 0;

// Se asigna el valor de 4 elementos al array de frutas
frutas = ["manzana", "pera", "platano", "naranja"];

// Se agrega el valor de uva y de 1516 al array de frutas
frutas.push("uva", 1516);

// Se elimina el ultimo elemento del array
frutas.pop();

// Se eliminan 2 elementos a partir del elmento 1
frutas.splice(1,2);

// Imprime el valor de cada elemento en el array de frutas
for (let i = 0; i < frutas.length; i++) {
    let element = frutas[i];
    console.log("El valor de element = " + element);
}

// Imprime el valor de el contador cuando se itera en el array de frutas
while (contador < frutas.length) {
    let contadorwhile = contador;
    console.log('El contador es = ' + contador);
    contador++;
}

// Imprime el valor de el contador al menos una vez hasta que el contador sea mayor a 10
do {
    console.log('El contador en dowhile es = ' + contador);
    contador++;
} while (contador <= 10);
