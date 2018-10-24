import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from './components/main/BookList';
import Search from './components/search/Search';
import { getAll, update } from './utils/BooksAPI';

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
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
    const found = this.state[prevShelf].find(book => book.id === id);
    const newShelf = e.target.value;
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
  };

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
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
          <Route exact={true} path="/search" render={() => <Search />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BookContainer;
