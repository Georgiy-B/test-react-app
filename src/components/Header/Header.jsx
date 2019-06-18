import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt=""/>
        <div className="header-motto">Ideas worth spreading</div>
      </div>
      <div className="header-links">
        <Link to={`/weather`}>WEATHER</Link>
        <a href="/">DISCOVER</a>
        <a href="/">ATTEND</a>
        <a href="/">PARTICIPATE</a>
        <a href="/">ABOUT</a>
        <a href="/">LOG IN</a>
        <a href="/">Search</a>
      </div>
    </div>
  );
}

export default Header;