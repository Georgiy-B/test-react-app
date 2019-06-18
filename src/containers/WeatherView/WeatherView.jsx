import React from 'react';
import { connect } from 'react-redux';
import { fetchDailyForecast } from '../../actions/weather';
import SearchBar from '../../components/SearchBar/SearchBar';
import ErrorDiv from '../../components/ErrorDiv/ErrorDiv';
import Loader from '../../components/Loader/Loader';
import Carousel from '../../components/Carousel/Carousel';
import WeatherThumbnail from '../../components/WeatherThumbnail/WeatherThumbnail';
import WeatherDetail from '../../components/WeatherDetail/WeatherDetail';
import './WeatherView.css';

class WeatherView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForecast: null
    };

    this.onThumbnailClick = this.onThumbnailClick.bind(this);
  }

  onThumbnailClick(e, selectedForecast) {
    this.setState({selectedForecast});
  }

  renderWeatherThumbnails() {
    if (!this.props.forecast.list) return;
    return this.props.forecast.list.map( (weather, index) => {
      return (
        <WeatherThumbnail
          key={index}
          onClick={this.onThumbnailClick}
          weather={weather}
        />
      );
    });
  }

  renderWeatherDetail() {
    if (!this.state.selectedForecast) return;
    return (
      <WeatherDetail
        city={this.props.forecast.city}
        weather={this.state.selectedForecast}
      />
    );
  }

  render () {
    const hasErrorHappened = !!this.props.forecast.error;

    return (
      <div className="weather-view">
        <SearchBar
          className="search-bar"
          onSearch={this.props.fetchDailyForecast}
        />
        <ErrorDiv showErrorMessage={hasErrorHappened} />
        <Loader showLoader={this.props.forecast.fetching} />

        <Carousel className="weather-carousel">
          {this.renderWeatherThumbnails()}
        </Carousel>

        <div className="weather-detail-container">
          {this.renderWeatherDetail()}
        </div>
      </div>
    );
  }
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