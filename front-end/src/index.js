import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles
import '../public/stylesheets/styles.css';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Reux store for reducers
import reducers from './reducers/index.js';
import reduxPromise from 'redux-promise';
// const theStore = createStore(reducers);
const theStore = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
    <Provider store={theStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
