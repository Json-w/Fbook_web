import React from 'react';
import './index.css'

const BookCard = ({imgUrl, imgAlt, title, author})=> {
  return (
    <div className="bookCard">
      <img
        src={imgUrl}
        alt={imgAlt}
        width="106px"
        height="158px"/>
      <span className="bookCard-title">{title}</span>
      <span className="bookCard-author">{author}</span>
    </div>
  );
}

export default BookCard;