import { combineReducers } from 'redux';
import GetListingsReducer from './GetListingsReducer';
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';

const masterReducer = combineReducers({
    listings: GetListingsReducer,
    register: RegisterReducer,
    login: LoginReducer

});

export default masterReducer;
