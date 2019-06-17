import React from 'react';
import './Loader.css';

function Loader({ showLoader=false }) {
  return showLoader ? <div className="loader"></div> : <div></div>;
}

export default Loader;