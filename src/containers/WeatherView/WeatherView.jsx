import React from 'react';
import { connect } from 'react-redux';
import { fetchDailyForecast } from '../../actions/weather';
import SearchBar from '../../components/SearchBar/SearchBar';
import ErrorDiv from '../../components/ErrorDiv/ErrorDiv';
import Loader from '../../components/Loader/Loader';
import Carousel from '../../components/Carousel/Carousel';
import WeatherThumbnail from '../../components/WeatherThumbnail/WeatherThumbnail';
import './WeatherView.css';

function WeatherView({forecast, fetchDailyForecast}) {
  const hasErrorHappened = !!forecast.error;

  return (
    <div className="weather-view">
      <SearchBar
        className="search-bar"
        onSearch={fetchDailyForecast}
      />
      <ErrorDiv showErrorMessage={hasErrorHappened} />
      <Loader showLoader={forecast.fetching} />

      <Carousel className="weather-carousel">
        {forecast.list.map( (weather, index) => <WeatherThumbnail key={index} weather={weather} /> )}
      </Carousel>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    forecast: state.weather.forecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDailyForecast: city => dispatch(fetchDailyForecast(city))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (WeatherView);