import React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from "@material-ui/core/es/Button/Button";
import './AppRoot.scss';


class AppRoot extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);