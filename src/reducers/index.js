import { combineReducers } from "redux/es/redux";
import usersReducer from './usersReducer';

export default combineReducers({
  users: usersReducer
});