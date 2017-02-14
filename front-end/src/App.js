import React, { Component } from 'react';
import Navbar from './Navbar.js';
import SearchBar from './containers/SearchBar.js';
import '../public/stylesheets/styles.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar />
                <p>Sanity check...</p>
            </div>
        );
    }
}

export default App
