'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const CurrentWeather = () => {
  return (
  <div>
   
    <div className='grid grid-cols-3 space-x-5 border-b-1 pb-5'>
        <div className='flex flex-col justify-center items-center'>
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-full'/>
         <p className='text-3xl uppercase tracking-widest'>Clear Sky</p>
        </div>
        <div className='flex flex-col justify-center'>
        <p className='text-7xl text-center'>70</p>
        <div className='flex justify-center items-center space-x-4 '>
            <div className="flex border-r border-black p-3 items-center">
            <p className='text-5xl '>F</p>
            </div>
            <div>
            <p className='text-5xl '>C</p>
            </div>
        </div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex justify-center items-center '>
            <FontAwesomeIcon icon={faSnowflake} className='pe-5'/>
             <p className='text-3xl'> MIN</p>
            </div>
            <div className='flex justify-center items-center '>
           
             <p className='text-3xl'> 45 *F</p>
            </div>
            <div className='flex justify-center items-center '>
            <FontAwesomeIcon icon={faFire} className='pe-5'/>
             <p className='text-3xl'> MAX</p>
            </div>
            <div className='flex justify-center items-center '>
           <p className='text-3xl'> 65 *F</p>
          </div>
        </div>

    </div>
  </div>
  )
}

export default CurrentWeather