import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads </h1>
      </div>
      <div className="book-detail">
        <div>
          <Link to="/" className="close-search">
            Shelves
          </Link>
        </div>
        <h3>This is not the page you're looking for</h3>
        <div>
          <img src="https://i.kym-cdn.com/photos/images/original/000/915/056/50e.jpg" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
