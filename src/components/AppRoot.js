import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import '../main.scss';
import { BrowserRouter as Router } from "react-router-dom";
import './nav.css';
import Routes from './Routes';


class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export default hot(Heading);