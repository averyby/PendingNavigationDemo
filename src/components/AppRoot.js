import React from 'react';
import { hot } from 'react-hot-loader/root';

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
        <div className="alert alert-dark" role="alert">
          This is a dark alert—check it out!
        </div>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <div className="alert alert-secondary" role="alert">
          This is a secondary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
        <button type="button" className="btn btn-primary">
          Profile <span className="badge badge-light">9</span>
          <span className="sr-only">unread messages</span>
        </button>
        <LoadableComponent />
        <span className="loading fa fa-spinner fa-spin"></span>
        <div>
          {this.state.show ? <LoadableComponent /> : null}
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);