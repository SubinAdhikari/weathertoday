import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const App = () =>{
  const [state,setState] = useState();
  const [cityName,setCityname] = useState('kathmandu');
  const date = new Date().toDateString();
// ======================================================================
  // One Way To Fetch Data From API
//   useEffect( () =>{
//     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9ed070076895cbb9f58c1387d3599ca3`)
//     .then( res =>{
//         console.log(res);
//         setState(res.data);
        
//     } )
//     .catch( err =>{
//         console.log(err);
//     })
// },[] )
// ======================================================================

// ======================================================================
// Second Way To Fetcch Data From API
useEffect(()=>{

  async function getData(){
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9ed070076895cbb9f58c1387d3599ca3`)
      console.log(res.data);
      setState(res.data);

  }

  getData();

});
// ======================================================================


  return(
   

<div>
{(typeof state != 'undefined') ? (
    <div  className="mainDiv">
      <div className="centerDiv">
        <div className="title">
          <span>Weather System</span>
          <h5>Find The Current Weather Of You'r City</h5>
        </div>
        <div className="inputDiv">
                <input type="text" placeholder="Enter City Name" value={cityName}  onChange={(event)=>{
                    setCityname(event.target.value);
                }}/>
        </div>
        <div className="displayCountryAndDateDiv">
                <span>{state.name},{state.sys.country}</span>
                <span>{date}</span>
        </div>
        <div className="displayTemperatureDiv">
                <span>{Math.round(state.main.temp)}° c</span>
        </div>
        <div className="displayConditionDiv">
                <span>{state.weather[0].main}</span>

                {(state.weather[0].main)=='Rain' ? <img src="http://openweathermap.org/img/w/10n.png"/> : null}
                {(state.weather[0].main)=='Clouds' ? <img src="http://openweathermap.org/img/w/04d.png"/>  : null}
                {(state.weather[0].main)=='Clear' ? <img src="http://openweathermap.org/img/w/01d.png"/>  : null}
                {(state.weather[0].main)=='Snow' ? <img src="http://openweathermap.org/img/w/13d.png"/> : null}
                {(state.weather[0].main)=='Thunderstorm' ? <img src="http://openweathermap.org/img/w/11d.png"/>  : null}
                {(state.weather[0].main)=='Drizzle' ? <img src="http://openweathermap.org/img/w/09d.png"/>  : null}
                {(state.weather[0].main)=='Mist' ? <img src="http://openweathermap.org/img/w/50d.png"/> : null}
                {(state.weather[0].main)=='shower rain' ? <img src="http://openweathermap.org/img/w/09d.png"/>  : null}
                {(state.weather[0].main)=='few clouds' ? <img src="http://openweathermap.org/img/w/02d.png"/>  : null}
                {(state.weather[0].main)=='Haze' ? <img src="http://openweathermap.org/img/w/50d.png"/> : null}

                

                

                {/*
                CLOUDY ICON
                 <img src="http://openweathermap.org/img/w/04d.png"/> 
                 */}

                {/* RAIN ICON
                 <img src="http://openweathermap.org/img/w/10n.png"/>
                  */}

                
        </div>
      </div>
    </div>
    ) : ('')}
</div>
  )
}
export default App;