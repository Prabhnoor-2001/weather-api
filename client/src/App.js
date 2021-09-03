import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { getPhoto, getTemp } from './api'
function App () {
  const [currTemp, setTemp] = useState({})
  const [isLoading, setLoad] = useState(true)
  const [weather, setWeather]= useState({})
  useEffect(()=>{
    getTemperature()
    //getPicture()
  },[])

  function getTemperature(){
    getTemp('Auckland')
      .then((data)=>{
        console.log(data);
        setTemp(data.main)
        setWeather(data.weather[0])
        setLoad(false)
        return null
      })
  }
  // function getPicture(){
  //   getPhoto(weather.icon)
  //     .then((photo)=>{
  //       console.log(photo);
  //     })
  // }
  //console.log(currTemp);
  return (
    <>
    <h1>{isLoading ? 'hi':currTemp.temp}°C</h1>
    <h1>{isLoading ? 'hi':weather.main}</h1>
    <h2>{isLoading ? 'hi':weather.description}</h2>
    </>
  )
}

export default App
