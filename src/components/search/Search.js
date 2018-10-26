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
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
        <ol className="books-grid">
          {books.map(book => {
            console.log(book);
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

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
