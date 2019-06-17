import React from 'react';
import './ArticleThumbnail.css';

function ArticleThumbnail({ article }) {
  const imgBackground = {
    backgroundImage: `url(${article.urlToImage})`
  };
  //Link
  return (
    <div className="thumbnail">
      <a
        href={article.url}
        className="thumbnail-content"
        style={imgBackground}
      >
        <div className="thumbnail-title">
          <div>{article.author}</div>
          <h5>{article.title}</h5>
        </div>
      </a>
    </div>
  );
}

export default ArticleThumbnail;