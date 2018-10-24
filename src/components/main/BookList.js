import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const BookList = props => {
  const { currentlyReading, wantToRead, read, moveBookToNewShelf } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            shelfTitle="Currently Reading"
            books={currentlyReading}
            id={'currentlyReading'}
            moveBookToNewShelf={moveBookToNewShelf}
          />
          <Bookshelf
            shelfTitle="Want to Read"
            books={wantToRead}
            id={'wantToRead'}
            moveBookToNewShelf={moveBookToNewShelf}
          />
          <Bookshelf
            shelfTitle="Read"
            books={read}
            id={'read'}
            moveBookToNewShelf={moveBookToNewShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

BookList.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  moveBookToNewShelf: PropTypes.func.isRequired
};
export default BookList;
