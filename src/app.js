import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './components/AppRoot';
import Data from '../data/bio';

ReactDOM.render(
  <AppRoot heading={Data.heading} content={Data.bioText} />,
  document.getElementById('react-root')
);
