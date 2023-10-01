/*Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.*/

var a = prompt("Ingrese el primer número");
var b = prompt("Ingrese el segundo número");
var c = prompt("Ingrese el último número");

if (a>b && a>c){
    mayor = a;
}else if (b>c){
    mayor = b;
}else {
    mayor = c;
}

alert("El mayor de los números es: " + mayor);