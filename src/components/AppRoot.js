import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import '../main.scss';
import MarkdownData from '../../data/post.md';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <img src={require('../images/square.jpg')} alt="" />
        <h1>{MarkdownData.title}</h1>
        <div className="content"
             dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}>
        </div>
      </div>
    )
  }
}

export default hot(Heading);