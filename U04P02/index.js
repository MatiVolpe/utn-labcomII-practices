/*Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.*/

var num = prompt("Ingrese un número entero");

if (num == 0){
    alert("El número es cero");
}else if(num<0){
    alert("El número es negativo");
}else {
    alert("El número es positivo");
}