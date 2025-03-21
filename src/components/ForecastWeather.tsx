'use client'
import React from 'react'


const ForecastWeather = () => {
  return (
    <div className='flex flex-col gap-5'>
        <p className='text-secondary-foreground font-bold text-1xl uppercase text-center'> 5 day forecast</p>
        <div className="grid grid-cols-5 gap-5  w-full h-full">
        <div id="day1" className='border-1 rounded-2xl  bg-secondary text-secondary-foreground w-full h-full p-2  flex flex-col justify-around'>
            <div className='flex'>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-auto w-[50px] object-contain'/>
            <div className='flex flex-col justify-center'>
                <p >H:31*F</p>
                <p> L:56*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> day 1</p>
        </div>
        <div id="day2" className='border-1 rounded-2xl bg-secondary min-w-auto text-secondary-foreground flex flex-col justify-around  w-auto h-full  '>
            <div className='flex'>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-auto w-[50px] object-contain'/>
            <div className='flex flex-col justify-center'>
                <p >H:31*F</p>
                <p> L:56*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> day 2</p>
        </div>
        <div id="day3" className='border-1 rounded-2xl bg-secondary text-secondary-foreground  flex flex-col justify-around'>
            <div className='flex'>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-auto w-[50px] object-contain'/>
            <div className='flex flex-col justify-center'>
                <p >H:31*F</p>
                <p> L:56*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> day 3</p>
        </div>
        <div id="day4" className='border-1 rounded-2xl bg-secondary text-secondary-foreground  flex flex-col justify-around'>
            <div className='flex'>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-auto w-[50px] object-contain'/>
            <div className='flex flex-col justify-center'>
                <p >H:31*F</p>
                <p> L:56*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> day 4</p>
        </div>
        <div id="day5" className='border-1 rounded-2xl bg-secondary text-secondary-foreground  flex flex-col justify-around'>
            <div className='flex'>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-auto w-[50px] object-contain'/>
            <div className='flex flex-col justify-center'>
                <p >H:31*F</p>
                <p> L:56*F</p>
            </div>
            </div>
            <p className='uppercase text-center'> day 5</p>
        </div>
        
        </div> 
    </div>
  )
}

export default ForecastWeather