import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsView from '../../containers/NewsView/NewsView';
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
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
