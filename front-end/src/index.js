import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import Search from './containers/Search';

// Styles
import '../public/stylesheets/styles.css';

// Redux, Router imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

// Reux store for reducers
import reducers from './reducers/index.js';
import reduxPromise from 'redux-promise';
const theStore = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
    <Provider store={theStore(reducers)}>
        <Router history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/search/:term' component={Search} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
