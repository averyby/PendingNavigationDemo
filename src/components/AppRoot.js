import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import '../main.styl';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="profile">
        <img src={require('../images/square.jpg')} alt="" />
        <h1>{this.props.heading}</h1>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default hot(Heading);