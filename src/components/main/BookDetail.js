import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../utils/BooksAPI';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    get(id).then(res => {
      console.log(res);
      this.setState({
        book: res
      });
    });
  }

  render() {
    const {
      title,
      subtitle,
      imageLinks,
      authors,
      description,
      pageCount
    } = this.state.book;
    console.log(this.state.book);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Book - {title} </h1>
        </div>
        <div className="book-detail">
          <div>
            <Link to="/" className="close-search">
              Shelves
            </Link>
          </div>
          <h3>
            {title} - {subtitle}
          </h3>
          <div>
            <img src={(imageLinks && imageLinks.thumbnail) || ''} alt={title} />
          </div>
          <ul>
            <li>
              <span className="boldSubtitle">Author:</span>{' '}
              {(authors && authors.join(', ')) || ''}
            </li>
            <li>
              <span className="boldSubtitle">Pages:</span> {pageCount}
            </li>
            <li>
              <span className="boldSubtitle">Description:</span> {description}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookDetail;
