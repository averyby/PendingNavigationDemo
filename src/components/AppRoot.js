import React from 'react';
import { hot } from 'react-hot-loader/root';
import './AppRoot.scss';

class AppRoot extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            Level 1: .col-sm-9
            <div className="row">
              <div className="col-8 col-sm-6">
                Level 2: .col-8 .col-sm-6
              </div>
              <div className="col-4 col-sm-6">
                Level 2: .col-4 .col-sm-6
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);