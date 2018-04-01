import { combineReducers } from 'redux';
import byId from './by-id';
import current from './current';

export default combineReducers({ byId, current });
