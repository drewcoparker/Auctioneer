import React, { Component } from 'react';
import Navbar from './containers/Navbar.js';
import '../public/stylesheets/styles.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <p>Sanity check...</p>
            </div>
        );
    }
}

export default App
