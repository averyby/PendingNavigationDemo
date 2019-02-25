import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './main.styl';
import styled from '@emotion/styled';
import { css } from "@emotion/core";

const Fancy = styled('h1')`
  color: ${props => (props.wild ? "hotpink" : "gold")}
`;

const red = "#f00";

const className = css`
  color: ${red};
  font-size: 13px;
`;

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
    const isWild = this.state.count % 2 === 0;
    return (
      <div css={className}>
        <Fancy wild={isWild} onClick={this.handleClick}>
          Count: {this.state.count}
        </Fancy>
      </div>
    )
  }
}

export default hot(Heading);