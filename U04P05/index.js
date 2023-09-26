/*El usuario debe ingresar un número en un prompt, el prompt debe volver a abrirse para pedir el valor si no es un numero >0.
Cuando el numero sea >0 calcular el factorial y mostrarlo con una alerta*/


var num;
var factorial;

do{
    num = prompt("Ingrese un numero para calcular el factorial");
    num = parseInt(num);
}while (isNaN(num) || num < 0);

factorial = 1;

for (var i = 1; i <= num; i++){
    factorial = factorial * i;
}

alert("El factorial del número " + num + " es " + factorial);

