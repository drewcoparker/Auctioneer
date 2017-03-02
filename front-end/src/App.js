import React, { Component } from 'react';
import Navbar from './containers/Navbar.js';
import Listings from './containers/Listings.js'



// Custom styles
import '../public/stylesheets/styles.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar />
                <Listings cat={this.props.params.subcat}/>
            </div>
        );
    }
}

export default App
