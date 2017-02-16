import React, { Component } from 'react';
import { Link } from 'react-router';

class Authorization extends Component {
    render() {
        console.log(this.props);
        if (this.props) {
            return(
                <div>
                    <Link to='/login'>Login </Link>|<Link to='/register'> Register</Link>
                </div>
            )
        } else {
            return(
                <div>
                    {this.props.name}
                </div>
            )
        }
    }
}

export default Authorization;
