import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { getTemp } from './api'
import SearchBar from './components/searchBar'
import Review from './components/Review'
function App () {
  const [currTemp, setTemp] = useState({})
  const [isLoading, setLoad] = useState(true)
  const [weather, setWeather]= useState({})
  const [currentCity, setCity] =  useState('')
  useEffect(()=>{
    getTemperature()
  },[])

  function getTemperature(){
    if(isLoading){
      getTemp("copenhagen")
      .then((data)=>{
        setTemp(data.main)
        setWeather(data.weather[0])
        setLoad(false)
        return null
      })
      .catch((err)=>{
        console.log("hey error");
      })
    }
   else{ getTemp(currentCity)
      .then((data)=>{
        setTemp(data.main)
        setWeather(data.weather[0])
        setLoad(false)
        return null
      })
      .catch((err)=>{
        console.log("hey error");
      })}
  }
  function handleChange (event) {
    //setSearch(event.target.value)
    //console.log(event.target.value);
    handleCityName(event.target.value)
  }
  function handleCityName (name) {
    setCity(name)
    //console.log(currentCity);
  }
  //console.log(currTemp);
  return (
    <>
    <Route exact path='/'>

    <h1>{isLoading ? 'hi':currTemp.temp}°C</h1>
    <h1>{isLoading ? 'hi':weather.main}</h1>
    <h2>{isLoading ? 'hi':weather.description}</h2>
    {
      isLoading ? 'hi':
      <SearchBar
          placeholder='London etc...'
          handleChange={(event) => {
            handleChange(event)
          }}
          getTemperature={getTemperature}
        />
    }
    </Route>
    <Route path='/reviews' component={Review}>
    </Route>
    </>
  )
}

export default App
