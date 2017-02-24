import { combineReducers } from 'redux';

import GetListingsReducer from './GetListingsReducer';
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import ListingItemReducer from './ListingItemReducer';
import BidReducer from './BidReducer';
import CreateListingReducer from './CreateListingReducer';

const masterReducer = combineReducers({
    listings: GetListingsReducer,
    register: RegisterReducer,
    login: LoginReducer,
    listingItem: ListingItemReducer,
    bid: BidReducer,
    lastCreatedListing: CreateListingReducer

});

export default masterReducer;
