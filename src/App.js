import React, { useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import { url } from './utils/url'
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const searchLocation = () => {
      axios.get(`${url}?q=${location}&units=metric&appid=389802676fb5a763e894ab159eccc4ba`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          // onKeyPress={searchLocation}
          placeholder='Search...'
          type="text" />
          <button onClick={searchLocation} ><i className='fa-brands fa-searchengin'></i></button>
      </div>
      
      <Weather data={data}/>
    </div>
  );
}

export default App;