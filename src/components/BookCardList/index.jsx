import React from 'react'

import BookCard from '../../components/BookCard'
import './index.css'

const BookCardList = ({bookCards})=> {
  return (
    <div className="bookCard-list">
      {bookCards.map((bookCard, i)=> {
        return <BookCard
          key={i}
          imgUrl={bookCard.imageUrl}
          imgAlt={bookCard.imgAlt}
          title={bookCard.title}
          author={bookCard.author}
        />
      })}
    </div>
  );
}

export default BookCardList;