let tarjeta = document.getElementById('card');

async function consultarCiudad(){
    let ciudad = document.getElementById('selector-ciudad').value;
    let tarjeta = document.getElementById('card');
    const api_id = "a49f2089297d7216a6e25354544789ce";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_id}&units=metric&lang=es`;

    try{
        const response = await fetch(url);
        console.log(response);
        if (response.ok){
            const data = await response.json();
            mostrarCard(data);
        }
        else{
            tarjeta.innerHTML = 'Hubo un error en la consulta. Error 404';
        }
    }
    catch(err) {
        tarjeta.innerHTML = 'Hubo un error en la consulta. Error 404';
    }
}

function mostrarCard(data){
    const {name, sys:{country, sunrise}, wind:{speed}, main:{temp, feel_like, humidity, pressure, temp_max}, weather:[arr]} = data;
    tarjeta.innerHTML = `
    <h3>${name}</h3>
    <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
    <p>Pais: ${country}</p>
    <p>Temperatura: ${temp}</p>
    `;
}