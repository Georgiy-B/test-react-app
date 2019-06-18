import React from 'react';

function ErrorDiv({ showErrorMessage=false, className='' }) {
  return showErrorMessage ?
    <div className={`text-danger ${className}`}>Something went wrong. Please try again later.</div>
    : <div></div>;
}

export default ErrorDiv;