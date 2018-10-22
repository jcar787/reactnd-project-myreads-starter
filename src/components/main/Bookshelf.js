import React from 'react';
import BookCard from './BookCard';

export default props => {
  const { title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            const { id, name, author, url } = book;
            return <BookCard key={id} name={name} author={author} url={url} />;
          })}
        </ol>
      </div>
    </div>
  );
};
