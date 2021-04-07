import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState('');

  useEffect (() => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  }, [])

  let getWeather = async (lat, long) => {
    let res = await Axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=2ba5e459&lat=${lat}&lon=${long}&user_ip=remote` , {
      params: {
        lat: lat,
        long: long,
      }
    });
    setWeather(res.data.results);
  } 

  if(location === false) {
    return(
      <h1> Você deve habilitar a opção de Localização! </h1>
    );
  } else {
  return(
      <div className="App">
        <h1> Condições Climaticas: {weather.description}</h1>
        <ul>
          <li> Cidade: {weather.city}°C</li>
          <li> Temperatura: {weather.temp}</li>
          <li> Data: {weather.date}</li>
          <li> Hora: {weather.time}</li>
          <li> Condição climatica: {weather.condition_code}</li>
        </ul>
      </div>
    );
  }
}

export default App;