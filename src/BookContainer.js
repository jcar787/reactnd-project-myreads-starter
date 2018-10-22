import React, { Component } from 'react';
import BookList from './components/main/BookList';
import Search from './components/search/Search';

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false
    };
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? <Search /> : <BookList />}
      </div>
    );
  }
}

export default BookContainer;
