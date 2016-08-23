
const API_KEY = 'c018a2653dec445d95faeae0fdf4f844';
const ROOT_URL = `api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

export default function(latitude,longitude){
const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;

  return fetch(url).then(function(response){
  return  response.json();  // this is a promise

}).then(function(json){
  return {
    city:json.city,
    temprature: KelvinToF(json.main.temp),
    description: json.weather.description
  }
});

}

KelvinToF(){
  return Math.round((kelvin-273.15) * 1.8 + 32) + '˚F';
}
