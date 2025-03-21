'use client';
import React from 'react'
import Searchbox from './Searchbox'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'

const MainComponent = () => {
  return (
    <div> 
    <Searchbox/>
    <CurrentWeather/>
    <ForecastWeather/></div>
  )
}

export default MainComponent