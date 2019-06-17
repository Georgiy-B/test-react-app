import React from 'react';
import './Grid.css';

function NewsGrid({ children }) {
  console.log('1000', children);
  return (
    <div className="grid">
      {children}
    </div>
  );
}

export default NewsGrid;