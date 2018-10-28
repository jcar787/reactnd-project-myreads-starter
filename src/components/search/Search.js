import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookCard from '../main/BookCard';

const Search = props => {
  const { books, search, onChange, shelfId, moveBookToNewShelf } = props;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={search}
            type="text"
            id="search"
            placeholder="Search by title or author"
            onChange={e => onChange(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {search && books && books.length > 0 ? (
          <ol className="books-grid">
            {books.map(book => {
              const { id, title, authors } = book;
              return (
                <BookCard
                  key={id}
                  id={id}
                  shelfId={book.shelf || shelfId}
                  title={title}
                  authors={authors}
                  smallThumbnail={
                    (book &&
                      book.imageLinks &&
                      book.imageLinks.smallThumbnail) ||
                    ''
                  }
                  moveBookToNewShelf={moveBookToNewShelf}
                />
              );
            })}
          </ol>
        ) : search !== '' && books.length === 0 ? (
          <h3>No Books Found</h3>
        ) : (
          <h3>Search for a Book</h3>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
