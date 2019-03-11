import React from 'react';
import { hot } from 'react-hot-loader/root';
import './AppRoot.scss';


class AppRoot extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-md-auto">
            Variable width content
          </div>
          <div className="col col-lg-2">
            3 of 3
          </div>
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);