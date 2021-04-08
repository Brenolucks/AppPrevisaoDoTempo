import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Infos from './components/Infos';

function App() {
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
 
  useEffect(() => {
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  let getCity = async () => {
    let res = await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=fb9c8dfa&city_name=${query}`);
    setWeather(res.data.results);
  }

  return(
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setQuery={setQuery}
      />
      <Infos
        weather={weather}
      />
    </div>
  );
}

export default App;