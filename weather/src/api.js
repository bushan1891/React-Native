
const API_KEY = 'c018a2653dec445d95faeae0fdf4f844';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

export default function(latitude,longitude){
console.log(latitude,longitude)
const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;
console.log(url);
  return fetch(url)
  .then(function(response){
    console.log(response);
    return  response.json();  // this is a promise
  },(err)=> {console.log(err);})
  .then(function(json){
      return {
        city:json.city,
        temprature: KelvinToF(json.main.temp),
        description: json.weather[0].description
      }

    },(err)=> {console.log(err);});

}

 KelvinToF = function(kelvin){
  return Math.round((kelvin-273.15) * 1.8 + 32) + '˚F';
}
