import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <h1 onClick={this.handleClick}>
        Count: {this.state.count}
      </h1>
    )
  }
}

export default hot(Heading);