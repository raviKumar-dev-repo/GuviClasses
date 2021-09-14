// Open weather task 
// Create an account at openweather api,  get the key
// Navigate to API > API Doc > Current Weather data > geographic coordinates and copy the api link 




//1. Use the rest countries API to get the lat and lang.
var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function () {
    var data = JSON.parse(this.response)

    data.forEach(element => {
        try {

            var name = element.name;
            var lang = element.latlng
            //console.log(name+" :: " + lang);

            if (lang.length == 0) {
                throw new Error('Coordinates not available')
            }
            fetchWeatherData(name, ...lang)

        } catch(e) {
            console.log("Coordinates not available for : "+element.name + "     "+ e.message);

        }

    });

}


function fetchWeatherData(name, lat, lon) {

    var apikey = "4d4640c90378a9e0fb461609b93c1efa";
    var req2 = new XMLHttpRequest();
    var lat = lat;
    var lon = lon;
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
        '&appid=4d4640c90378a9e0fb461609b93c1efa';
    req2.open('GET', url, true);
    req2.send();
    req2.onload = function () {
        var result = JSON.parse(this.response);
        console.log(`${name} : ${result.main.temp}`)




    }

}