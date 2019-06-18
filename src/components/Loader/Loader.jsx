import React from 'react';
import './Loader.css';

function Loader({ showLoader=false, className='' }) {
  return showLoader ? <div className={`loader ${className}`}></div> : <div></div>;
}

export default Loader;