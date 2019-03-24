import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";
import routes from './routes';
import { type } from '../appConfig.json';
import PendingNavDataLoader from './components/PendingNavDataLoader/PendingNavDataLoader';
import { clientStore as store } from "./helpers/createStore";


Loadable.preloadReady().then(() => {
  const method = type === 'SSR' ? 'hydrate' : 'render';
  ReactDOM[method](
    <Provider store={store}>
      <Router>
        <PendingNavDataLoader routes={routes}>
          {renderRoutes(routes)}
        </PendingNavDataLoader>
      </Router>
    </Provider>,
    document.getElementById('react-root')
  );
});
