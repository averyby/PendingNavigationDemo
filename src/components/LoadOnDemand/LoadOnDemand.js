import React, { Component } from 'react';
import zelda from '../../images/zelda.png';
import './loadOnDemand.scss'

class LoadOnDemand extends Component {
  render() {
    return (
      <div className="load-on-demand">
        <img src={zelda} alt="zelda" />
      </div>
    );
  }
}

export default LoadOnDemand;
