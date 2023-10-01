/*De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante,
cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. 
Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas
correctas que ha obtenido, y sabiendo que:
- Nivel superior: Porcentaje>=90%.
- Nivel medio: Porcentaje>=75% y <90%.
- Nivel regular: Porcentaje>=50% y <75%.
- Fuera de nivel: Porcentaje<50%. */


let nombre = document.getElementById("nombre");
let preguntas =  document.getElementById("preguntadas");
let correctas = document.getElementById("correctas");


function onClickBoton(){
    alert("Hola");
    if (preguntas.value < correctas.value){
        alert("La cantidad de preguntas correctas no puede ser mayor a las preguntadas");
    } else {
        var porcentaje = (correctas.value/preguntas.value) * 100;
        if (porcentaje >= 90){
            alert(nombre.value + " está en el niver superior con un " + porcentaje + "%");
        } else if (porcentaje >= 75){
            alert(nombre.value + " está en el niver medio con un " + porcentaje + "%");
        } else if (porcentaje >= 50){
            alert(nombre.value + " está en el niver regular con un " + porcentaje + "%");
        } else {
            alert(nombre.value + " se encuentra fuera de nivel")
        }
    }
}

let boton = document.getElementById('boton');
boton.onclick = onClickBoton;