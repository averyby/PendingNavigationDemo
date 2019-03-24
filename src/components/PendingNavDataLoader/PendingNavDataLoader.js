import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { matchRoutes } from "react-router-config";
import { clientStore as store } from "../../helpers/createStore";
import PropTypes from 'prop-types';

function loadNextData(routes, location) {
  console.log('routes', routes);
  console.log('location', location);
  const promises = matchRoutes(routes, location.pathname).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  return Promise.all(promises);
}

class PendingNavDataLoader extends Component {
  state = {
    previousLocation: null
  };

  componentWillReceiveProps(nextProps) {
    const navigated = nextProps.location !== this.props.location;
    const { routes } = this.props;

    if (navigated) {
      // save the location so we can render the old screen
      this.setState({
        previousLocation: this.props.location
      });

      // load data while the old screen remains
      loadNextData(routes, nextProps.location).then((data) => {
        // putTheDataSomewhereRoutesCanFindIt(data)
        // clear previousLocation so the next screen renders
        this.setState({
          previousLocation: null
        })
      })
    }
  }

  render() {
    const { children, location } = this.props;
    const { previousLocation } = this.state;

    return (
      <Route
        location={previousLocation || location}
        render={() => children}
      />
    );
  }
}

PendingNavDataLoader.propTypes = {};
PendingNavDataLoader.defaultProps = {};

export default withRouter(PendingNavDataLoader);
