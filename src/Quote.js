import React, { Component } from 'react';
import QuoteHeader from './QuoteHeader';

class Quote extends Component {
  render() {
    return (
      <div className="card">
        <QuoteHeader id={this.props.id} author={this.props.author} />
        <div
          id={this.props.id}
          className="collapse"
          aria-labelledby={this.props.author}
          data-parent="#accordion">
          <div className="card-body">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Quote;
