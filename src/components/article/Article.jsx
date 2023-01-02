import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, childText }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3 className="gradient__text">{text}</h3>
        <h3>{childText}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
