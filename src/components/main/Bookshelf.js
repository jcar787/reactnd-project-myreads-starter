import React from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

const Bookshelf = props => {
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

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
