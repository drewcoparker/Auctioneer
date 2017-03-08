import { combineReducers } from 'redux';
import GetListingsReducer from './GetListingsReducer';
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import ListingItemReducer from './ListingItemReducer';
import BidReducer from './BidReducer';
import CreateListingReducer from './CreateListingReducer';

// The master reducer. All actions flow through the master reducer which then
// returns a new version of the state tree, aka, the store.
const masterReducer = combineReducers({
    listings: GetListingsReducer,
    register: RegisterReducer,
    auth: LoginReducer,
    listingItem: ListingItemReducer,
    bid: BidReducer,
    lastCreatedListing: CreateListingReducer

});

export default masterReducer;
