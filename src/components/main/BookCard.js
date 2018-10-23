import React from 'react';
import BookHeader from './BookHeader';

export default props => {
  const { name, author, url } = props;
  return (
    <li>
      <div className="book">
        <BookHeader url={url} />
        <div className="book-title">{name}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
};
