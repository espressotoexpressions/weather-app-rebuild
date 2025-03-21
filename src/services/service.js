import { APIKEY } from "./environment";

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

        //forecast data population in UI
        for (let i=0; i<5;i++)// because we only want the top 5 entries of the returned json data
        {
    
            let varDayName =   `forecast${i}Day`;
            let iconName = `forecast${i}Icon`;
            let forecastWeatherName =   `forecast${i}weather`;
            let forecastMaxName = `forecast${i}max`;
            let forecastMinName = `forecast${i}min`; 
            
            let forecastDayElement = document.getElementById(varDayName.toString());
            let forecastIconElement = document.getElementById(iconName.toString());
            let forecastWeatherElement = document.getElementById(forecastWeatherName.toString());
            let forecastMaxElement = document.getElementById(forecastMaxName.toString());
            let forecastMinElement = document.getElementById(forecastMinName.toString());
         
          
             const timestampforecast= data.list[i*8].dt; // multplied index to 8 to account for each day because there are 8 entries of 3 hr intervals each day
            // Convert the timestamp to a JavaScript Date object
            const date = new Date(timestampforecast * 1000); 
    
            // Display the formatted date to show Day only
            forecastDayElement.innerText=(date.toLocaleString('en-US', {
                weekday: 'short'
            })).toUpperCase(); 
                    
          
    ;        //icon mapping from weather api
            let iconCode = data.list[i*8].weather[0].icon; // accesss first weather condition as it is the primary if multiple weather condition is returned
            forecastIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            forecastWeatherElement.innerText =data.list[i*8].weather[0].description;
            forecastMaxElement.innerText=`${data.list[i*8].main.temp_max}°F`;
            forecastMinElement.innerText=`${data.list[i*8].main.temp_min}°F`;
        }
    
     }
 