import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from './components/main/BookList';
import Search from './components/search/Search';
import { get, getAll, search, update } from './utils/BooksAPI';

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      search: '',
      searchResults: []
    };
  }

  componentDidMount() {
    getAll().then(data => {
      this.setState({
        currentlyReading: data.filter(
          book => book.shelf === 'currentlyReading'
        ),
        wantToRead: data.filter(book => book.shelf === 'wantToRead'),
        read: data.filter(book => book.shelf === 'read')
      });
    });
  }

  moveBookToNewShelf = (e, prevShelf, id) => {
    e.persist();
    const newShelf = e.target.value;
    if (prevShelf === 'none') {
      get(id)
        .then(book => {
          book.shelf = newShelf;
          this.setState(prevState => {
            return {
              ...prevState,
              [newShelf]: [...prevState[newShelf], book],
              search: '',
              searchResults: []
            };
          });
          return book;
        })
        .then(book => {
          update(book, newShelf);
        });
    } else {
      const found = this.state[prevShelf].find(book => book.id === id);
      if (newShelf !== 'none' && found) {
        update(found, newShelf).then(() => {
          this.setState(prevState => {
            return {
              ...prevState,
              [prevShelf]: prevState[prevShelf].filter(book => book.id !== id),
              [newShelf]: [...prevState[newShelf], found]
            };
          });
        });
      }
    }
  };

  doesBookBelongsToAShelf = (book, shelf) => {
    const newBook = this.state[shelf].find(current => book.id === current.id);
    if (newBook) {
      newBook.shelf = shelf;
      return newBook;
    }
    return book;
  };

  onChange = e => {
    e.persist();
    const { id, value } = e.target;
    Promise.resolve(
      this.setState({
        [id]: value
      })
    ).then(() => {
      search(value).then(res => {
        if (res && !res.error) {
          res = res.map(book =>
            this.doesBookBelongsToAShelf(book, 'currentlyReading')
          );
          res = res.map(book =>
            this.doesBookBelongsToAShelf(book, 'wantToRead')
          );
          res = res.map(book => this.doesBookBelongsToAShelf(book, 'read'));
          this.setState(prevState => {
            return {
              ...prevState,
              searchResults: res
            };
          });
        } else {
          this.setState(prevState => {
            return {
              ...prevState,
              searchResults: []
            };
          });
        }
      });
    });
  };

  render() {
    const {
      currentlyReading,
      wantToRead,
      read,
      search,
      searchResults
    } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <BookList
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
                moveBookToNewShelf={this.moveBookToNewShelf}
              />
            )}
          />
          <Route
            exact={true}
            path="/search"
            render={() => (
              <Search
                search={search}
                onChange={this.onChange}
                books={searchResults}
                shelfId={'none'}
                moveBookToNewShelf={this.moveBookToNewShelf}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BookContainer;
