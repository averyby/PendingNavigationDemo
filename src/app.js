import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import AppRoot from './components/AppRoot';
import { type } from '../appConfig.json';

Loadable.preloadReady().then(() => {
  const method = type === 'SSR' ? 'hydrate' : 'render';
  ReactDOM[method](
    <AppRoot />,
    document.getElementById('react-root')
  );

});
