import React, { Component } from 'react';

class QuoteHeader extends Component {
  render() {
    return (
      <div className="card-header" id={this.props.author}>
        <h5 className="mb-0">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target={`#${this.props.id} `}
            aria-expanded="false"
            aria-controls="collapseTwo">
            {this.props.author}
          </button>
        </h5>
      </div>
    );
  }
}

export default QuoteHeader;
