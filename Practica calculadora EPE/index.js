let usuario = document.getElementsByName('radio-usuario');
let boton = document.getElementById('calculo');


const servicio = 102;
var tipoDeUsuario = '';
var iva = '';
var distrito = '';
var costoZona = 0;
var cantKwh = 0;
var costoTotal = 0;
var error = false;

function calcularCosto() {
    error = true;
    for (let i = 0; i < 2; i++) {
        if (usuario[i].checked) {
            tipoDeUsuario = usuario[i].value;
            break;
        }
    }
    if (tipoDeUsuario == '') {
        alert('Debe seleccionar si es un usuario residencial o industrial');
        error = false;
    } else if (tipoDeUsuario == 'residencial') {
        iva = 0.21;
    } else {
        iva = 0.27;
    }
    let distrito = document.getElementById('select-domicilio').value;
    if (distrito == '') {
        alert('Debe seleccionar un distrito');
        error = false;
    } else {
        switch (distrito) {
            case 'centro':
                costoZona = 5.8;
                break;
            case 'sur':
                costoZona = 5.4;
                break;
            case 'oeste':
                costoZona = 5.35;
                break;
            case 'norte':
                costoZona = 5.6;
                break;
        }
    }
    let kwh = document.getElementById('cant-kw').value;
    if (kwh <= 0) {
        alert('Debe ingresar un monto de kWh mayor a cero');
        error = false;
    }
    if (error) {
        costoTotal = servicio + kwh * costoZona * (1 + iva);
        alert('El monto total a pagar es de: $' + String(parseInt(costoTotal)));
    }
}

boton.onclick = calcularCosto;

console.log('hola');