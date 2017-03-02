import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogOutAction from '../actions/LogOutAction';

class Logout extends Component {

    handleLogOut() {
        console.log('logout pressed');
    }

    render() {
        return(
            <div className='logout'>
                <span onClick={this.handleLogOut}>log out</span>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOut: LogOutAction
    })
}

export default connect(null, mapDispatchToProps) (Logout)
