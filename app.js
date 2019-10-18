
function getWeather(){

    let city = $('#change-form input[name="City"]').val()
    let country = $('#change-form input[name="Country"]').val()
    
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=bc3c704ba5c2b457e8e1cf98e202e116', function( data ){
        console.log(data)
    
    
    
    
        let high = Math.floor(((data.main.temp_max - 273.15)*1.8)+32)
        $('#high').text(high)


        let low = Math.floor(((data.main.temp_min - 273.15)*1.8)+32)
        $('#low').text(low)

        let forcast = data.weather[0].main
        $('#forcast').text(forcast)

        let humidity = data.main.humidity
        $('#humidity').text(humidity)
    });
}


