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
        <Link>WATCH</Link>
        <Link>DISCOVER</Link>
        <Link>ATTEND</Link>
        <Link>PARTICIPATE</Link>
        <Link>ABOUT</Link>
        <Link>LOG IN</Link>
        <Link>Search</Link>
      </div>
    </div>
  );
}

export default Header;