import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './components/AppRoot';

import Loadable from 'react-loadable';

Loadable.preloadReady().then(() => {

  ReactDOM.hydrate(
    <AppRoot />,
    document.getElementById('react-root')
  );

});
