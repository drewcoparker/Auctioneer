import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class UserListingPanel extends Component {

    render() {
        if ((this.props.auth !== null) && (this.props.auth.isLoggedIn)) {
            return(
                <div className='sub-menu-left'>
                    <div><Link to='/create'>Create listing</Link></div>
                    <div><Link to='/items/my-listings'>My listings</Link></div>
                </div>
            )
        } else {
            return(
                <div className='sub-menu-left'>
                    <div>Login to create a listing</div>
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

export default connect(mapStateToProps, null)(UserListingPanel);
