import React from 'react';

function ErrorDiv({ showErrorMessage=false }) {
  return showErrorMessage ? <div className="text-danger">Something went wrong. Please try again later.</div> : <div></div>;
}

export default ErrorDiv;