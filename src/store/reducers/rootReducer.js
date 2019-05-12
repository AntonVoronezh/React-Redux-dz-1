import { combineReducers } from 'redux';
import loginFormReducer from './loginFormReducer';
import loginReducer from './loginReducer';

export default combineReducers({ loginForm: loginFormReducer, login: loginReducer });
