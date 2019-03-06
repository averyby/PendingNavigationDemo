import React from 'react';
import { hot } from 'react-hot-loader/root';
import Loadable from 'react-loadable';
import _ from 'lodash-es';
import './AppRoot.scss';

const LoadableComponent = Loadable({
  loader: () => import('./LoadOnDemand/LoadOnDemand'),
  loading: () => <div>Loading...</div>
});

const ServerSideRendered = Loadable({
  loader: () => import('./ServerSideRendered/ServerSideRendered'),
  loading: () => <div>Loading...</div>
});

class AppRoot extends React.Component {
  state = {
    show: false
  };

  showComponent = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="app-root">
        <button onClick={this.showComponent}>
          测试 React Loadable
        </button>
        <ServerSideRendered />
        {this.state.show ? <LoadableComponent /> : null}
      </div>
    );
  }
}

export default hot(AppRoot);