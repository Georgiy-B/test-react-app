import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to={'/'} className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt=""/>
        <div className="header-motto">Ideas worth spreading</div>
      </Link>
      <div className="header-links">
        <Link to={`/weather`}>Weather</Link>
        <Link to={`/translator`}>Translator</Link>
        <Link to={`/urban`}>Urban Dictinary</Link>
        <a href="/">PARTICIPATE</a>
        <a href="/">ABOUT</a>
        <a href="/">LOG IN</a>
        <a href="/">Search</a>
      </div>
    </div>
  );
}

export default Header;