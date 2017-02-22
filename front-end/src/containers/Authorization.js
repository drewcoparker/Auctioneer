import React, { Component } from 'react';
import { Link } from 'react-router';

class Authorization extends Component {

    render() {
        if (this.props.loggedIn) {
            return(
                <div>
                    Welcome {this.props.loginName}
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
