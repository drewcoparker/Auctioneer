import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import Search from './containers/Search';
import ListingItem from './containers/ListingItem';
import CreateListing from './containers/CreateListing';

// Styles
import '../public/stylesheets/styles.css';

// Redux, Router imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

// Redux store for reducers
import reducers from './reducers/index.js';
import reduxPromise from 'redux-promise';

// A token is generated from the backend when the user logs in.
// loadState and saveState are methods to save to and retrieve this token to
// local storage. This allows the user to reamin logged in while navigating
// througout the app and even after she leaves closes the browser and returns
// to the page.
import { loadState, saveState } from './localStorage';
const persistedState = loadState();

// Instantiate the store obect with createStore method. The reducers param is
// required. I also pass the login token retreived from locals storage as
// persistedState. Finally, reduxPromise middleware is passed to assist in my
// ajax requests.
const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(
        reduxPromise
    )
)
// Catch the login state when the login action is dispatched. Save this piece of
// state to local storage.
store.subscribe(() => {
    saveState({
        auth: store.getState().auth
    });
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/create' component={CreateListing} />
            <Route path='/search/:term' component={Search} />
            <Route path='/listing/:listingId' component={ListingItem} />
            <Route path='/items/:subcat' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
