import React, { Component } from 'react';
import { Link } from 'react-router';
import LogOut from './LogOut.js';

class Authorization extends Component {

    render() {
        if (this.props.loggedIn) {
            return(
                <div className='login'>
                    <span>Welcome {this.props.loginName}</span>
                    <LogOut />
                </div>
            )
        } else {
            return(
                <div>
                    <Link to='/login'>Login </Link>|<Link to='/register'> Register</Link>
                </div>
            )
        }
    }
}

export default Authorization;
