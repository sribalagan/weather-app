import React, { useState } from 'react';
import axios from 'axios';
function Wheather() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    data: {},
    error: false,
  });
  const search = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = '5a9db4368994272397bdeb7f0f058123';
      axios.get(url, {
        params: {
          q: input,
          units: 'metric',
          appid: api_key,
        },
      })
        .then((response) => {
          console.log('response', response);
          setWeather({ data: response.data, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setInput('');
          console.log('error', error);
        });
      console.log()
    }
  };


  return (


    <div className="container">
      <div className="text-center">
        <input
          type="text"
          className="city-search input-text-field"
          placeholder="Enter City Name"
          name="cityName"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.error && (
        <>
          <span className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-9q.425 0 .713-.288Q13 12.425 13 12V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4q0 .425.288.712q.287.288.712.288Z" /></svg>
            <span>Opps! Something went to wrong. Try Again.</span>
          </span>
        </>
      )}
      {weather && weather.data && weather.data.main && (<div className='sky-card'>
        <div>
          <h2 className='sky-card__heading '>SkyCast - Weather App</h2>
        </div>

        <img
          className="data-image"
          src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
          alt={weather.data.weather[0].description}
        />
        <div className='data-temp'>
          {Math.round(weather.data.main.temp)}
          <span>°C|°F</span>
        </div>
        <div className="data-city">
          <h2>
            {weather.data.name}, <span>{weather.data.sys.country}</span>
          </h2>
        </div>
        <div className="data">
          <div className='data-element'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='data-element__details--icons'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 8h2m2-2.143V5.5A2.5 2.5 0 1 1 9.5 8H8m-4 6h1m10 3v.5a3.5 3.5 0 1 0 3.5-3.5H9m-7-3h6m7-3v-.5a3.5 3.5 0 1 1 3.5 3.5h-6.25" /></svg><p>Wind Speed</p></div>
            <span>{weather.data.wind.speed} m/s</span>
          </div>
          <div className='data-element'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='data-element__details--icons'><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M20.693 17.33a9 9 0 1 0-17.386 0" /><path d="M12.766 15.582c.487.71.144 1.792-.766 2.417c-.91.626-2.043.558-2.53-.151c-.52-.756-2.314-5.007-3.403-7.637c-.205-.495.4-.911.79-.542c2.064 1.96 5.39 5.157 5.909 5.913Z" /><path stroke-linecap="round" d="M12 6v2m-6.364.636L7.05 10.05m11.314-1.414L16.95 10.05m3.743 7.28l-1.931-.518m-15.455.518l1.931-.518" /></g></svg><p>Atm Pressure</p></div>
            <span>{weather.data.main.pressure} hPa</span>
          </div>
          <div className='data-element'><div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className='data-element__details--icons'><path fill="currentColor" d="M26 12a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.898 3.898 0 0 1 26 12m0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a1.98 1.98 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30M16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7.002 7.002 0 0 0 16 12" /></svg><p>Humidity</p></div><span >{weather.data.main.humidity} %</span></div>
        </div>
        <p className='footer'>Web Designed by <a href='https://github.com/sribalagan' target='_blank' rel="noreferrer" className='underline underline-offset-2 font-semibold text-gray-950' >sri balagan</a> </p>
      </div>
    )}


    </div>




  );
}

export default Wheather;