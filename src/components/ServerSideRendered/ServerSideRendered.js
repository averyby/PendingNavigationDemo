import React, { Component } from 'react';
import './serverSideRendered.scss';

class ServerSideRendered extends Component {
  render() {
    return (
      <div className="server-side-rendered">
        <h4>我应该在服务端就渲染了。</h4>
      </div>
    );
  }
}


export default ServerSideRendered;
