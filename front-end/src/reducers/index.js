import { combineReducers } from 'redux';
import GetListingsReducer from './GetListingsReducer';

const masterReducer = combineReducers({
    listings: GetListingsReducer
});

export default masterReducer;
