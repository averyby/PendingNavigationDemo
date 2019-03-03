var React = require('react');

import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "LoadOnDemand" */ './LoadOnDemand'),
  loading: () => <div>Loading...</div>
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      show: true
    });
  }

  render() {
    const { show } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>
          Reveal Loadable Content
        </button>
        <div>
          {<LoadableComponent />}
        </div>
      </div>
    );
  }
}