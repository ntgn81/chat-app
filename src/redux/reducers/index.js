import { combineReducers } from 'redux';
import rooms from './rooms';
import messages from './messages';
import socket from './socket';

export default combineReducers({ rooms, messages, socket });
