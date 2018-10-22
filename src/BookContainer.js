import React, { Component } from 'react';
import BookList from './components/main/BookList';
import Search from './components/search/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" render={() => <BookList />} />
          <Route exact={true} path="/search" render={() => <Search />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BookContainer;
