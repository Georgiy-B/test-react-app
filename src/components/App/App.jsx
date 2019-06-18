import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsView from '../../containers/NewsView/NewsView';
import WeatherView from '../../containers/WeatherView/WeatherView';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={NewsView} />
          <Route path="/weather" component={WeatherView} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
