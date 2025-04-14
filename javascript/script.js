const apiKey = '67ac3361a81823463669ff6f146ab856'; 
let searchBtn = document.getElementById("search")
let inputData = document.getElementById("inputData");
inputData.focus();

searchBtn.addEventListener("click",async ()=>{
    const city = document.getElementById("inputData").value.trim();
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    let data = await url.json();
    console.log(data)
    document.querySelector(".temperature").textContent = Math.round(data.main.temp)+`°`;
    document.querySelector(".weather").textContent = data.weather[0].main
    document.querySelector(".location").innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${data.name}, ${data.sys.country}`
    document.querySelector(".feel-temp").innerHTML = Math.round(data.main.feels_like);
    document.querySelector(".humidity-percentage").innerHTML = `${data.main.humidity}%`;
    document.getElementById("weather-img").src = getWeatherIcon(data.weather[0].main);
    document.querySelector(".weather-data").classList.remove("active");
    document.querySelector(".weather-card").classList.add("active");
    
})

function getWeatherIcon(condition){
  switch (condition.toLowerCase()) {
    case "clear":
      return "./image/clear.svg";
    case "clouds":
      return "./image/cloud.svg";
    case "rain":
      return "./image/rain.svg";
    case "snow":
      return "./image/snow.svg";
    case "drizzle":
      return "./image/drizzle.svg";
    case "thunderstorm":
      return "./image/storm.svg";
    default:
      return "./image/clear.svg";
  }
}

let backBtn = document.querySelector(".bi-arrow-left-short");
backBtn.addEventListener("click",()=>{
  document.querySelector(".weather-data").classList.add("active");
  document.querySelector(".weather-card").classList.remove("active");
  inputData.value = "";
  inputData.focus();
})