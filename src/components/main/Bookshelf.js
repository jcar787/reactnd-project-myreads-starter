import React from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

const Bookshelf = props => {
  const { id: shelfId, shelfTitle, books, moveBookToNewShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            const {
              id,
              title,
              authors,
              imageLinks: { smallThumbnail }
            } = book;
            return (
              <BookCard
                key={id}
                id={id}
                shelfId={book.shelf || shelfId}
                title={title}
                authors={authors}
                smallThumbnail={smallThumbnail}
                moveBookToNewShelf={moveBookToNewShelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  moveBookToNewShelf: PropTypes.func.isRequired
};

export default Bookshelf;
