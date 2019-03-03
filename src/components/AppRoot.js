import React from 'react';
import { hot } from 'react-hot-loader/root';
import '../main.scss';
import './nav.css';

import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./LoadOnDemand'),
  loading: () => <div>Loading...</div>
});

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState({
      show: true
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Reveal Loadable Content, haha
        </button>
        <div>
          {<LoadableComponent />}
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);