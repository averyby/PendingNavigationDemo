import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import createStore from './helpers/createStore';
import { renderRoutes } from "react-router-config";
import routes from './routes';
import { type } from '../appConfig.json';

const store = createStore();

Loadable.preloadReady().then(() => {
  const method = type === 'SSR' ? 'hydrate' : 'render';
  ReactDOM[method](
    <Provider store={store}>
      <Router>
        <div>{renderRoutes(routes)}</div>
      </Router>
    </Provider>,
    document.getElementById('react-root')
  );
});
