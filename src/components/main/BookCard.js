import React from 'react';
import { Link } from 'react-router-dom';
import BookHeader from './BookHeader';
import PropTypes from 'prop-types';

const BookCard = props => {
  const {
    id,
    title,
    authors,
    smallThumbnail,
    shelfId,
    moveBookToNewShelf
  } = props;
  return (
    <li>
      <div className="book">
        <BookHeader
          alt={title}
          smallThumbnail={smallThumbnail}
          moveBookToNewShelf={moveBookToNewShelf}
          id={id}
          shelfId={shelfId}
        />
        <Link to={`/book/${id}`}>
          <div className="book-title">{title}</div>
        </Link>
        <div className="book-authors">{authors ? authors.join(', ') : ''}</div>
      </div>
    </li>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  smallThumbnail: PropTypes.string.isRequired,
  authors: PropTypes.array,
  id: PropTypes.string.isRequired,
  moveBookToNewShelf: PropTypes.func.isRequired
};

export default BookCard;
