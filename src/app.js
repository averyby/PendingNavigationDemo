import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { renderRoutes } from "react-router-config";
import routes from './routes';
import { type } from '../appConfig.json';
import { createStore, applyMiddleware } from "redux/es/redux";

console.log('window.INITIAL_STATE', window.INITIAL_STATE);
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);

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
