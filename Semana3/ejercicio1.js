let rojas = 10;
let verdes = "20";

function suma(num1, num2) {
    let total = num1 + num2;
    console.log(total);
};

function resta(num1, num2) {
    let total;
    if(num1 > num2){
        total = num1 - num2;
    } else {
        total = num2 - num1;
    }
    console.log(total);
}

function multiplicar(num1, num2) {
    let total = num1 * num2;
    console.log(total);
}

function divir(num1,num2){
    let total;
    if(num1 > num2){
        total = num1 / num2;
    } else {
        total = num2 / num1;
    }
    console.log(total);
}

divir(rojas, verdes);
divir(verdes, rojas);