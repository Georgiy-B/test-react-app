import React from 'react';
import { getIconImgUrl } from '../../api/weather';
import './WeatherThumbnail.css';

function WeatherThumbnail({weather}) {
  const sky = weather.weather[0];
  const date = new Date(weather.dt_txt).toDateString();
  const time = new Date(weather.dt_txt).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit'
  });

  return (
    <div className="weather-thumbnail">
      <div className="weather-date">{date}</div>
      <div className="weather-time">{time}</div>
      <div className="weather-temp">
        {sky &&
          <img
            src={getIconImgUrl(sky.icon)}
            title={`${sky.main} (${sky.description})`}
            alt="weather icon"/>
        }
        <span>{weather.main.temp} &deg;C</span>
      </div>
      <div className="weather-info">
        <span>
          <img src={`${process.env.PUBLIC_URL}/img/weather/humidity.png`} alt="Humidity:" title="Humidity"/>
          <span>{weather.main.humidity}%</span>
        </span>
        <span>
          <img src={`${process.env.PUBLIC_URL}/img/weather/wind.png`} alt="Wind:" title="Wind speed"/>
          <span>{weather.wind.speed}m/s</span>
        </span>
      </div>
    </div>
  );
}

export default WeatherThumbnail;