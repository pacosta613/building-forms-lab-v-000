import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();

    this.state = { text: '' }
  }
  render() {
    return (
      <div>
        bands component

        <form onSubmit={(e) => this.submit(e)}>

          <input type='text' value={this.state.text}/>

          
        </form>
      </div>
    );
  }
};

export default BandInput;
