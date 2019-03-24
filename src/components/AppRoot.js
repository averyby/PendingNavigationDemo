import React from 'react';
import { hot } from 'react-hot-loader/root';
import { renderRoutes } from "react-router-config";
import './AppRoot.scss';

class AppRoot extends React.Component {
  render() {
    const { route } = this.props;
    console.log('route', route);

    return (
      <div className="container">
        <article className="users">
          {renderRoutes(route.routes)}
        </article>
      </div>
    );
  }
}

export default hot(AppRoot);