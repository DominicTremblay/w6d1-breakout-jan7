import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import NewQuote from './NewQuote';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          id: 'Leonardo_da_Vinci',
          author: 'Leonardo da Vinci',
          content: 'Learning never exhausts the mind.',
          comments: [
            {
              id: 'd9b85c5e',
              content: 'Mind your language!',
            },
            {
              id: 'd6bee37e',
              content: 'Mind your business!',
            },
          ],
          category: 'top100',
        },
        {
          id: 'Audrey_Hepburn',
          author: 'Audrey Hepburn',
          content:
            "Nothing is impossible, the word itself says 'I'm possible'!",
          comments: [],
          category: 'top100',
        },
        {
          id: 'Winston_Churchill',
          author: 'Winston Churchill',
          content:
            'Success is not final, failure is not fatal: it is the courage to continue that counts.',
          comments: [],
          category: 'top100',
        },
        {
          id: 'Pablo_Picasso',
          author: 'Pablo Picasso',
          content: 'Computers are useless. They can only give you answers.',
          comments: [],
          category: 'computers',
        },
        {
          id: 'Steve_Wozniak',
          author: 'Steve Wozniak',
          content: "Never trust a computer you can't throw out a window.",
          comments: [],
          category: 'computers',
        },
        {
          id: 'Norman_Ralph_Augustine',
          author: 'Norman Ralph Augustine',
          content:
            "One of the most feared expressions in modern times is 'The computer is down.'",
          comments: [],
          category: 'computers',
        },
      ],
    };
  }

  addNewQuote = (author, quote) => {
    // update the state

    // create new quote Obj
    const newQuote = {
      id: uuid.v1(),
      author: author,
      content: quote,
      comments: [],
      category: 'general',
    };

    console.log(newQuote);

    // merge this new object with the current array of quotes

    const quotes = [...this.state.quotes, newQuote];

    this.setState({
      quotes: quotes,
    });
  };

  render() {
    const cardElements = this.state.quotes.map(quoteObj => (
      <Quote
        key={quoteObj.id}
        id={quoteObj.id}
        author={quoteObj.author}
        content={quoteObj.content}
      />
    ));

    return (
      <React.Fragment>
        <h1>Famous Quotes</h1>

        <div id="accordion">{cardElements}</div>

        <NewQuote addNewQuote={this.addNewQuote} />
      </React.Fragment>
    );
  }
}

export default App;
