import { createStore, applyMiddleware } from "redux/es/redux";
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
}