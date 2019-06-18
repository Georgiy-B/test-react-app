import React from 'react';
import { getIconImgUrl } from '../../api/weather';
import './WeatherThumbnail.css';

class WeatherThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    return this.props.onClick(e, this.props.weather);
  }

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

  render () {
    const date = new Date(this.props.weather.dt_txt).toDateString();
    const time = new Date(this.props.weather.dt_txt).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit'
    });

    return (
      <div className="weather-thumbnail" onClick={this.onClick}>
        <div className="date">{date}</div>
        <div className="time">{time}</div>
        <div className="temp">
          {this.renderSkyInfo()}
          <span>{this.props.weather.main.temp} &deg;C</span>
        </div>
        <div className="info">
          <span>
            <img src={`${process.env.PUBLIC_URL}/img/weather/humidity.png`} alt="Humidity:" title="Humidity"/>
            <span>{this.props.weather.main.humidity}%</span>
          </span>
          <span>
            <img src={`${process.env.PUBLIC_URL}/img/weather/wind.png`} alt="Wind:" title="Wind speed"/>
            <span>{this.props.weather.wind.speed}m/s</span>
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherThumbnail;