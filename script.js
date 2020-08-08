function weatherBalloon() {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

    var key = 'f8eb06bf60edeef10a250fbf59f3d997';

    fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
})}}

window.onload = function() {
    weatherBalloon( 6167865 );
}

function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

    document.getElementById('descriptionId').innerHTML = d.weather[0].description;
    document.getElementById('degreeId').innerHTML = celcius + '&deg;';
    document.getElementById('timezoneId').innerHTML = d.name;
}