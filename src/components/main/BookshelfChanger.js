import React from 'react';
import PropTypes from 'prop-types';

const BookshelfChanger = props => {
  const { moveBookToNewShelf, id, shelfId } = props;
  console.log(shelfId);
  return (
    <div className="book-shelf-changer">
      <select
        value={shelfId}
        onChange={e => moveBookToNewShelf(e, shelfId, id)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  id: PropTypes.string.isRequired,
  moveBookToNewShelf: PropTypes.func.isRequired
};

export default BookshelfChanger;
