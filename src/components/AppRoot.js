import React from 'react';
import { hot } from 'react-hot-loader/root';
import './AppRoot.scss';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container app-root-container">
        <div className="row">
          <div className="col-sm">Custom column</div>
          <div className="col-sm">Custom column</div>
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);