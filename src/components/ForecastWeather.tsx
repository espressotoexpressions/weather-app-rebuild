'use client'
import { City } from '@/interfaces/interface';
import { get5DayForecastData } from '@/services/service';
import React, { useEffect, useState } from 'react'

interface CurrentWeatherProps {
    cityData: City; // Pass cityData as a prop
  }

  interface DayForecastInterface{
    day:string,
    minTemp:number,
    maxTemp:number,
    icon: string;

  }

const ForecastWeather = ({cityData}:CurrentWeatherProps) => {
    const [day1,setDay1]=useState<DayForecastInterface>({day:'',minTemp:0,maxTemp:0,icon:''});
    const [day2,setDay2]=useState<DayForecastInterface>({day:'',minTemp:0,maxTemp:0,icon:''});
    const [day3,setDay3]=useState<DayForecastInterface>({day:'',minTemp:0,maxTemp:0,icon:''});
    const [day4,setDay4]=useState<DayForecastInterface>({day:'',minTemp:0,maxTemp:0,icon:''});
    const [day5,setDay5]=useState<DayForecastInterface>({day:'',minTemp:0,maxTemp:0,icon:''});


    const getForecastWeather = async (cityData:City)=>{
        const forecastWeatherData =await get5DayForecastData(cityData.lat,cityData.lon);
        
        // console.log("forecastWeather Data MAX" + forecastWeatherData.list[0].main.temp_max);
        // console.log("forecastWeather Data MIN" + forecastWeatherData.list[0].main.temp_min)
        // console.log("DATE" +forecastWeatherData.list[0].dt);
        // //convert date
        
        // // Display the formatted date to show Day only
        // console.log("CONVERT DATE" + date.toLocaleString('en-US', {
        //     weekday: 'long'
        // }));
        
        const date1 = new Date(forecastWeatherData.list[0].dt* 1000); 
        setDay1({
            day: date1.toLocaleString('en-US', {weekday: 'long'}),
            minTemp:forecastWeatherData.list[0].main.temp_min ,
            maxTemp: forecastWeatherData.list[0].main.temp_max,
            icon: forecastWeatherData.list[0].weather[0].icon
          });


          // accesss first weather condition as it is the primary if multiple weather condition is returned
        const date2 = new Date(forecastWeatherData.list[1*8].dt* 1000); 
        setDay2({
            day: date2.toLocaleString('en-US', {weekday: 'long'}),
            minTemp:forecastWeatherData.list[1*8].main.temp_min ,
            maxTemp: forecastWeatherData.list[1*8].main.temp_max,
            icon: forecastWeatherData.list[1*8].weather[0].icon
          });
          
          // accesss first weather condition as it is the primary if multiple weather condition is returned
        const date3 = new Date(forecastWeatherData.list[2*8].dt* 1000);               
        setDay3({
            day: date3.toLocaleString('en-US', {weekday: 'long'}),
            minTemp:forecastWeatherData.list[2*8].main.temp_min ,
            maxTemp: forecastWeatherData.list[2*8].main.temp_max,
            icon: forecastWeatherData.list[2*8].weather[0].icon
          });

          // accesss first weather condition as it is the primary if multiple weather condition is returned
          const date4 = new Date(forecastWeatherData.list[3*8].dt* 1000);        
          setDay4({
            day: date4.toLocaleString('en-US', {weekday: 'long'}),
            minTemp:forecastWeatherData.list[3*8].main.temp_min ,
            maxTemp: forecastWeatherData.list[3*8].main.temp_max,
            icon: forecastWeatherData.list[3*8].weather[0].icon
          });

          const date5 = new Date(forecastWeatherData.list[4*8].dt* 1000);   
          setDay5({
            day: date5.toLocaleString('en-US', {weekday: 'long'}),
            // accesss first weather condition as it is the primary if multiple weather condition is returned
            minTemp:forecastWeatherData.list[4*8].main.temp_min ,
            maxTemp: forecastWeatherData.list[4*8].main.temp_max,
            icon: forecastWeatherData.list[4*8].weather[0].icon
          });
       
       
       };

  useEffect(()=>{
    console.log("INITIAL LOAD of Forecast")
    getForecastWeather(cityData);
  },[])

  useEffect(()=>{
    console.log("DAY Data refresh")
    getForecastWeather(cityData);
    console.log("DAY1 Data" +day1.day)
  },[cityData])

  return (
    <div className='flex flex-col gap-5 w-full'>
        <p className='text-secondary-foreground font-bold text-1xl uppercase text-center'> 5 day forecast</p>
        <div className="grid grid-cols-5 gap-5  w-full h-full">
        <div id="day1" className='border-1 rounded-2xl  bg-secondary text-secondary-foreground w-full h-full p-2  flex flex-col justify-around'>
            <div className='flex'>
            <img src={`https://openweathermap.org/img/wn/${day1.icon}@2x.png`} alt="" className='h-auto w-auto object-contain'/>
            <div className='flex flex-col justify-center'>
                <p>H:{Math.round(day1.maxTemp)}*F</p>
                <p>L:{Math.round(day1.minTemp)}*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> {day1.day}</p>
        </div>
        <div id="day2" className='border-1 rounded-2xl bg-secondary min-w-auto text-secondary-foreground flex flex-col justify-around  w-auto h-full  '>
            <div className='flex'>
            <img src={`https://openweathermap.org/img/wn/${day2.icon}@2x.png`} alt="" className='h-auto w-auto object-contain'/>
            <div className='flex flex-col justify-center'>
                <p >H:{Math.round(day2.maxTemp)}*F</p>
                <p> L:{Math.round(day2.minTemp)}*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> {day2.day}</p>
        </div>
        <div id="day3" className='border-1 rounded-2xl bg-secondary text-secondary-foreground  flex flex-col justify-around'>
            <div className='flex'>
            <img src={`https://openweathermap.org/img/wn/${day3.icon}@2x.png`} alt="" className='h-auto w-auto object-contain'/>
            <div className='flex flex-col justify-center'>
            <p >H:{Math.round(day3.maxTemp)}*F</p>
                <p> L:{Math.round(day3.minTemp)}*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> {day3.day}</p>
        </div>
        <div id="day4" className='border-1 rounded-2xl bg-secondary text-secondary-foreground  flex flex-col justify-around'>
            <div className='flex'>
            <img src={`https://openweathermap.org/img/wn/${day4.icon}@2x.png`} alt="" className='h-auto w-auto object-contain'/>
            <div className='flex flex-col justify-center'>
            <p >H:{Math.round(day4.maxTemp)}*F</p>
                <p> L:{Math.round(day4.minTemp)}*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> {day4.day}</p>
        </div>
        <div id="day5" className='border-1 rounded-2xl bg-secondary text-secondary-foreground  flex flex-col justify-around'>
            <div className='flex'>
            <img src={`https://openweathermap.org/img/wn/${day5.icon}@2x.png`} alt="" className='h-auto w-auto object-contain'/>
            <div className='flex flex-col justify-center'>
            <p >H:{Math.round(day5.maxTemp)}*F</p>
                <p>L: {Math.round(day5.minTemp)}*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> {day5.day}</p>
        </div>
        
        </div> 
    </div>
  )
}

export default ForecastWeather