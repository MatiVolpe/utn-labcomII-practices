var clave="ornitorrinco";
var contador=0;

function mensaje(valido, msg){
    let pmensaje= document.getElementById('mensaje');
    if (valido){
        pmensaje.style.color="green";
        pmensaje.innerText="Acceso concedido";
        
    } else{
        pmensaje.style.color="red";
        pmensaje.innerText="Clave incorrecta";
        
    }
}

function validar(){
    let inputText= document.getElementById('claveUsr');
    var valorIngresado=inputText.value;
        if(clave==valorIngresado){
            mensaje(true,"Clave incorrecta");
            contador=0;
        }
        else{
            
            contador=contador+1;
            if(contador>2){
                alert("Intruso");
            }
            else{
                mensaje(false,"Clave incorrecta");
            }
        }
    
}

let btnValidar= document.getElementById('btnValidar');
btnValidar.onclick=validar;