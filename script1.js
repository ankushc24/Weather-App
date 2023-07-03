const apikey="197761d8d99a3f2a937ca6a9b430798d";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon");

async function checkfunc(city){
    const response=await fetch(apiURL+city+"&appid="+apikey);
    var data=await response.json();

    //console.log(data);
    if(response.status==404){  //checking if the city exists or not (spelling)
        document.querySelector(".error").style.display="block";
        document.querySelector(".displayweather").style.display="none";  
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
    
        if(data.weather[0].main == "Clouds" ){
            icon.src = "images/clouds.png";
        }
            
        else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png";
        }
            
        else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png";
        }
            
        else if(data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png";
        }
        
        else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png";
        }
        document.querySelector(".error").style.display="none";
        document.querySelector(".displayweather").style.display="block";  

    }
  
}

searchBtn.addEventListener("click", function(){ //when we click the search button we call the function
    checkfunc(searchBox.value);
})