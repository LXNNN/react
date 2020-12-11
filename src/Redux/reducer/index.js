import { combineReducers } from 'redux';
import account from './accountReducer.js';
import showUser from './showUserReducer';

const chatReducer = combineReducers({
  account,
  showUser
})

export default chatReducer;