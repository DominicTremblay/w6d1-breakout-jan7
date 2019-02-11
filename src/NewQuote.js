import React, { Component } from 'react';

class NewQuote extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const authorEl = event.target.elements.author;
    const quoteEl = event.target.elements.quote;

    this.props.addNewQuote(authorEl.value, quoteEl.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="author" placeholder="Your name" />
        <input type="text" name="quote" placeholder="add your quote" />
        <input type="submit" value="Add Quote" />
      </form>
    );
  }
}

export default NewQuote;
