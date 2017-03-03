import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogOutAction from '../actions/LogOutAction';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        browserHistory.push('/');
        this.props.logOut(this.props.token)
    }

    render() {
        console.log(this.props.token);
        return(
            <div className='logout'>
                <span onClick={this.handleLogOut}>log out</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOut: LogOutAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Logout)
