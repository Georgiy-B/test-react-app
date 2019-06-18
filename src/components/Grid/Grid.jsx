import React from 'react';
import './Grid.css';

function NewsGrid({ children }) {
  return (
    <div className="grid">
      {children}
    </div>
  );
}

export default NewsGrid;