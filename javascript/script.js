const apiKey = '67ac3361a81823463669ff6f146ab856'; 
const city = 'England';

let place = document.querySelector("location")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(data)

   document.querySelector(".location").innerHTML = data.name
   document.querySelector(".temp").innerHTML = data.main.temp
   document.querySelector(".condition").innerHTML = data.weather[0].description
   document.querySelector(".humidity span").innerHTML = `${data.main.humidity}%`
   document.querySelector(".wind span").innerHTML = `${data.wind.speed} m/s`
   document.querySelector(".feel span").innerHTML = `${data.main.feels_like} C`

   

    // const weatherDiv = document.getElementById('weather');
    // weatherDiv.innerHTML = `
    //   <p>City: ${data.name}</p>
    //   <p>Temperature: ${data.main.temp}°C</p>
    //   <p>Weather: ${data.weather[0].description}</p>
    // `;
  })
  .catch(error => console.error('Error fetching weather data:', error));