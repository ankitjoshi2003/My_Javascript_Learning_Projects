const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const APIKEY = "0374abf53f77dcd1ab7c5ba4d734b928";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(URL + city +`&APPID=${APIKEY}`);
    var data = await response.json();
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
        document.querySelector(".error").style.display="none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main=="Clouds")
        {
            WeatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            WeatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            WeatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Clear"){
            WeatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Snow"){
            WeatherIcon.src="images/snow.png";
        }
        document.querySelector(".weather").style.display="block";
    }
   
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})