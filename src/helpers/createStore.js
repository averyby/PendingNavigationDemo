import { createStore, applyMiddleware } from "redux/es/redux";
import thunk from 'redux-thunk';
import reducers from '../reducers';
import window from 'global';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
}

console.log('window.INITIAL_STATE', window.INITIAL_STATE);

export const clientStore = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);