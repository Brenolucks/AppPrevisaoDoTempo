import React from 'react';

function Infos({ weather }) {
    return(
        <div>
        <ul> 
            <li> Cidade: {weather.city}</li>
            <li> Descrição: {weather.description}</li>
            <li> Dia ou Noite: {weather.currently}</li>
            <li> Data: {weather.date}</li>
            <li> Temperatura: {weather.temp}°C</li>
        </ul>
      </div>
    );
}

export default Infos;