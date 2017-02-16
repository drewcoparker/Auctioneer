import React, { Component } from 'react';
import { Link } from 'react-router';

class Authorization extends Component {
    render() {
        if (this.props.name === '') {
            return(
                <div>
                    <Link to='/login'>Login </Link>|<Link to='/register'> Register</Link>
                </div>
            )
        } else {
            return(
                <div>
                    Welcome {this.props.name}!
                </div>
            )
        }
    }
}

export default Authorization;
