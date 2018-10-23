import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const BookList = props => {
  const { current, want, read } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title="Currently Reading" books={current} />
          <Bookshelf title="Want to Read" books={want} />
          <Bookshelf title="Read" books={read} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

BookList.propTypes = {
  current: PropTypes.array.isRequired,
  want: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired
};
export default BookList;
