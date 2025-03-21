'use client'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import {getCoordinatesByLocationName} from "../services/service.js"
import { City } from '@/interfaces/interface'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const Searchbox =()=> {

  const [cityNameSearch, setCityNameSearch] = useState<string>('');

  // city Interface
  const [cityData,setCityData] = useState<City>({
    name:'Stockton',
    lat:37.9577016,
    lon:121.2907796,
    state:'California',
    country:'US'
  })



    const getCoordinatesData = async (cityNameSearch : string)=>{
      setCityData( await getCoordinatesByLocationName(cityNameSearch))
     
      console.log(setCityData);
      console.log(cityData.country);
  
    };

    
   

  return (
    <>
<div className=' flex justify-center items-center w-3/4 rounded-2xl bg-input ' >
<FontAwesomeIcon icon={faBars} className='ps-5 text-gray-600'/>
<Input type="text" placeholder="Search for a city" className='text-black rounded-2xl border-none focus:ring-0 focus:outline-none'  onChange={(e) => setCityNameSearch(e.target.value)}/>
<FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=>getCoordinatesData(cityNameSearch)} className='pe-5 text-gray-600' />
</div>
<div className='flex gap-5 text-3xl text-secondary-foreground'>
{/* <FontAwesomeIcon icon={faStar} /> */}
<div>

</div>
<div className='flex'>
<p>{cityData.name}</p>

{/*if state exists display*/}
{cityData.state !=null && <p>, {cityData.state}</p>}

<p>, {cityData.country}</p>

</div>

</div>

<CurrentWeather cityData={cityData}/>

<ForecastWeather cityData={cityData}/>

    </>


  )
}

export default Searchbox