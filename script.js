const apiKey= "e4475a9861aff5a27a6d38695340d287";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")
const weatherIcon= document.querySelector(".weather_icon")
 
async function checkWeather(city){
    const response= await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
    var data= await response.json()

    if(response.status== 404){
        document.querySelector(".error").style.display= "block"
        document.querySelector(".weather").style.display= "none"
    }else{
    document.querySelector(".error").style.display= "none"
    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".temp").innerHTML= data.main.temp + "°C"
    document.querySelector(".hum").innerHTML= data.main.humidity + "%"
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h"    

    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy.png"
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }else if(data.weather[0].main=="Thunderstorm"){
        weatherIcon.src="images/thunderstorm.png"
    }else if(data.weather[0].main=="Snow"){
         weatherIcon.src="images/snow.png"
    }

    document.querySelector(".weather").style.display= "block"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
