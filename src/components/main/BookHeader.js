import React from 'react';
import { Link } from 'react-router-dom';
import BookshelfChanger from './BookshelfChanger';
import PropTypes from 'prop-types';

const BookHeader = props => {
  const { id, smallThumbnail, moveBookToNewShelf, shelfId } = props;
  return (
    <div className="book-top">
      <Link to={`/book/${id}`}>
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${smallThumbnail}")`
          }}
        />
      </Link>
      <BookshelfChanger
        moveBookToNewShelf={moveBookToNewShelf}
        id={id}
        shelfId={shelfId}
      />
    </div>
  );
};

BookHeader.propTypes = {
  id: PropTypes.string.isRequired,
  smallThumbnail: PropTypes.string.isRequired,
  moveBookToNewShelf: PropTypes.func.isRequired
};

export default BookHeader;
