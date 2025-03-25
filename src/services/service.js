import { APIKEY } from "./environment.env";

export const getCoordinatesByLocationName = async (locationName)=>{
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=${APIKEY}`,{cache:"force-cache"});
    const data= await promise.json(); // transforms it to a json format
    console.log(data);
    return data[0];
  }

export const getCityNameByCoordinates = async (latitude,longitude)=>{
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${APIKEY}`,{cache:"force-cache"});
    const data= await promise.json(); // transforms it to a json format
    if (data.length>0)
        {
       
            let cityName =`${data[0].name}`;
           
            //check if there is state
            if (("state" in data[0])) {
            
                cityName += `, ${data[0].state}`;
            }
            cityName += `, ${data[0].country}`;
            currentCityName.innerText=cityName;
            getCurrentWeatherData(data[0].lat, data[0].lon);
            get5DayForecastData(data[0].lat, data[0].lon);
            saveToPrevious(cityName);
            
        }
        else {
            alert("No city found.");
     
        }
  }

export const getCurrentWeatherData = async (latitude,longitude)=>{
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=imperial`); //for Farenheit units
    const data= await promise.json(); // transforms it to a json format
    // console.log("IN SERVICE"+ data.weather[0].description);
    return data;
   
     }
    
export const get5DayForecastData= async(latitude,longitude)=>{
      
       const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=imperial`,{cache:"force-cache"});
       const data= await promise.json(); // transforms it to a json format
      
    return data;

      
    
     }
 