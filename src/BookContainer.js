import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from './components/main/BookList';
import Search from './components/search/Search';
import { getAll } from './utils/BooksAPI';

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
      console.log(data);
      this.setState({
        currentlyReading: data.filter(
          book => book.shelf === 'currentlyReading'
        ),
        wantToRead: data.filter(book => book.shelf === 'wantToRead'),
        read: data.filter(book => book.shelf === 'read')
      });
    });
    /*this.setState({
      currentlyReading: [
        {
          id: uuid(),
          name: 'To Kill a Mocking Bird',
          author: 'Harper Lee',
          url:
            'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        },
        {
          id: uuid(),
          name: "Ender's Game",
          author: 'Orson Scott Card',
          url:
            'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
        }
      ],
      wantToRead: [
        {
          id: uuid(),
          name: '1776',
          author: 'David McCullough',
          url:
            'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },
        {
          id: uuid(),
          name: "Harry Potter and the Sorcerer's Stone",
          author: 'J.K. Rowling',
          url:
            'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'
        }
      ],
      read: [
        {
          id: uuid(),
          name: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          url:
            'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'
        },
        {
          id: uuid(),
          name: "Oh, the Places You'll Go!",
          author: 'Seuss',
          url:
            'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api'
        },
        {
          id: uuid(),
          name: 'The Adventures of Tom Sawyer',
          author: 'Mark Twain',
          url:
            'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'
        }
      ]
    });*/
  }

  moveBookToNewShelf = (e, prevShelf, id) => {
    const found = this.state[prevShelf].find(book => book.id === id);
    const newShelf = e.target.value;
    if (newShelf !== 'none') {
      this.setState(prevState => {
        return {
          ...prevState,
          [prevShelf]: prevState[prevShelf].filter(book => book.id !== id),
          [newShelf]: [...prevState[newShelf], found]
        };
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
