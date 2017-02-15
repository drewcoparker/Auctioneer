import { combineReducers } from 'redux';
import GetListingsReducer from './GetListingsReducer';
import RegisterReducer from './RegisterReducer';

const masterReducer = combineReducers({
    listings: GetListingsReducer,
    register: RegisterReducer

});

export default masterReducer;
