'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { City } from '@/interfaces/interface'
import { getCurrentWeatherData } from '@/services/service'

interface CurrentWeatherProps {
  cityData: City; // Pass cityData as a prop
}
const CurrentWeather = ({ cityData }: CurrentWeatherProps) => {
  const [weatherDesc,setWeatherDesc]=useState<string>('');
  const [icon, setIcon]=useState<string>('');
  const [currentTemp,setCurrentTemp]  =useState<number>(0);
  const[currentMin,setCurrentMin]=useState<number>(0);
  const[currentMax,setCurrentMax] = useState<number>(0);


  const getCurrentWeather = async (cityData:City)=>{
   const currentWeatherData =await getCurrentWeatherData(cityData.lat,cityData.lon);
   console.log("IN get  CURRENT weather component function " + currentWeatherData.weather[0]);
    setWeatherDesc( currentWeatherData.weather[0].description);
    setIcon(currentWeatherData.weather[0].icon)
    setCurrentTemp(currentWeatherData.main.temp);
    setCurrentMax(currentWeatherData.main.temp_max);
    setCurrentMin(currentWeatherData.main.temp_min);
  };

  
  useEffect(()=>{
    console.log("INITIAL LOAD")
    getCurrentWeather(cityData);
  },[])

  useEffect(()=>{
    console.log("IN COMPONENT SET icon" + icon);
  }
  ,[icon])

useEffect(()=>{
  console.log("WHEN CITY DATA CHANGES");
  getCurrentWeather(cityData);
},[cityData])

  return (
  <div>
   
    <div className='grid grid-cols-3 space-x-5 border-b-1 pb-5 '>
        <div className='flex flex-col justify-center items-center '>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className='h-full'/>
         <p className='text-3xl uppercase tracking-widest text-center'>{weatherDesc}</p>
        </div>
        <div className='flex flex-col justify-center'>
        <p className='text-7xl text-center'>{Math.round(currentTemp)}</p>
        <div className='flex justify-center items-center space-x-4 pt-3'>
            <div className="flex border-r border-black p-3 items-center ">
            <p className='text-5xl '>F</p>
            </div>
            <div>
            <p className='text-5xl text-muted'>C</p>
            </div>
        </div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex justify-center items-center '>
            <FontAwesomeIcon icon={faSnowflake} className='pe-5'/>
             <p className='text-3xl'> MIN</p>
            </div>
            <div className='flex justify-center items-center '>
           
             <p className='text-3xl'> {Math.round(currentMin)} *F</p>
            </div>
            <div className='flex justify-center items-center '>
            <FontAwesomeIcon icon={faFire} className='pe-5'/>
             <p className='text-3xl'> MAX</p>
            </div>
            <div className='flex justify-center items-center '>
           <p className='text-3xl'> {Math.round(currentMax)} *F</p>
          </div>
        </div>

    </div>
  </div>
  )
}

export default CurrentWeather

