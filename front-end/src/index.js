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

// Reux store for reducers
import reducers from './reducers/index.js';
import reduxPromise from 'redux-promise';

// Persistent state
import { loadState, saveState } from './localStorage';
// const theStore = applyMiddleware(reduxPromise)(createStore)
const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(
        reduxPromise
    )
)

store.subscribe(() => {
    saveState({
        login: store.getState().login
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
