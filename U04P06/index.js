/*Escribir un programa que pida al usuario que ingrese una palabra clave en un input.
El usuario debe ingresar la palabra y presionar un botón “Validar”.
Si la palabra clave coincide mostrar en pantalla un mensaje en verde con el texto "Acceso concedido" y si no,
mostrar un mensaje en rojo con el texto "Clave incorrecta". Si falla tres veces consecutivas, se emitirá una Alerta,
con el texto “Intruso”. Al ingresar la clave correctamente el contador de intentos fallidos consecutivos se resetea.*/

cont = 1;

var palabraClave = 'matias'

function onClick(){
    var palabraInput = document.getElementById('texto');
    var palabraIng = palabraInput.value;  
    if (palabraClave != palabraIng && cont < 3){
        alert('Palabra clave incorrecta');
        cont += 1;
    }
    else if (palabraClave == palabraIng && cont < 3){
        alert('Acceso concedido');
        cont = 1;
    }else{
        alert('Intruso');
        cont = 1;
    }
}

let botonValidar = document.getElementById('validar')
botonValidar.onclick = onClick