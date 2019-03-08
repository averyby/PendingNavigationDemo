import React, { Component } from 'react';
import zelda from '../../images/zelda.png';
import './loadOnDemand.scss'

class LoadOnDemand extends Component {
  render() {
    return (
      <div className="load-on-demand">
        <img src={zelda} width="350" height="350" alt="zelda" />
      </div>
    );
  }
}

export default LoadOnDemand;
