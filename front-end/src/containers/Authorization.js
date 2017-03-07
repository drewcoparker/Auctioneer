import React, { Component } from 'react';
import { Link } from 'react-router';
import LogOut from './LogOut.js';
import { connect } from 'react-redux';

class Authorization extends Component {

    render() {
        if ((this.props.auth !== null) && (this.props.auth.isLoggedIn)) {
            return(
                <div className='login'>
                    <span>{this.props.auth.name}</span>
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

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Authorization);
