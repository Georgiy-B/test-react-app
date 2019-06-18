import React from 'react';
import { getIconImgUrl } from '../../api/weather';
import './WeatherDetail.css';

class WeatherDetail extends React.Component {
  renderSkyInfo() {
    const sky = this.props.weather.weather[0];
    if (!sky) return;
    return (
      <img
        src={getIconImgUrl(sky.icon)}
        title={`${sky.main} (${sky.description})`}
        alt="weather icon"
      />
    );
  }

  render() {
    const {city, weather} = this.props;
    const date = new Date(weather.dt_txt).toDateString();
    const time = new Date(weather.dt_txt).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit'
    });

    return (
      <div className={`weather-detail ${this.props.className}`}>
        <div>
          <div className="city">{city.name}, {city.country}</div>
          <div className="date">{date}</div>
          <div className="time">{time}</div>
          <div className="temp">
            {this.renderSkyInfo()}
            <span>{weather.main.temp} &deg;C</span>
          </div>
        </div>
        <ul className="info">
          <li>Temprature: {weather.main.temp_min} &deg;C - {weather.main.temp_max} &deg;C</li>
          <li>Pressure: {weather.main.pressure}</li>
          <li>Humidity: {weather.main.humidity}%</li>
          <li>Wind speed: {weather.wind.speed}m/s</li>
          <li>Wind direction: {weather.wind.deg}&deg;</li>
        </ul>
      </div>
    );
  }
}

export default WeatherDetail;