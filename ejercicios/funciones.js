// Función que suma 2 parametros y returna el total
function sumar(num1, num2) {
    let total = num1 + num2;
    return total;
};

// Función que resta 2 parametros y returna el total
function restar(num1, num2) {
    let total;
    if(num1 > num2){
        total = num1 - num2;
    } else {
        total = num2 - num1;
    }
    return total
}

// Función que multiplica 2 parametros y returna el total
function multiplicar(num1, num2) {
    let total = num1 * num2;
    return total;
}

// Función que divide 2 parametros y returna el total
function divir(num1,num2){
    let total;
    if(num1 > num2){
        total = num1 / num2;
    } else {
        total = num2 / num1;
    }
    return total;
}



