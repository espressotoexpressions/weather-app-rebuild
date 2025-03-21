'use client'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import {getCoordinatesByLocationName} from "../services/service.js"
import { City } from '@/interfaces/interface'

const Searchbox =()=> {

  const [cityNameSearch, setCityNameSearch] = useState<string>('');
  const [cityData,setCityData] = useState<City>({
    name:'',
    lat:0,
    lon:0,
    state:'',
    country:''
  })


    const getCoordinatesData = async (cityNameSearch : string)=>{
      // const coordinatesData = await getCoordinatesByLocationName(cityNameSearch);
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
<FontAwesomeIcon icon={faStar} />
<p>{cityData.name},{cityData.state},{cityData.country}</p>
<i className="wi wi-night-sleet"></i>
</div>
    </>


  )
}

export default Searchbox