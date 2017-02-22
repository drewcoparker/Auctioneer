import React, { Component } from 'react';
import { Link } from 'react-router';

class UserListingPanel extends Component {

    render() {
        if (this.props.loggedIn) {
            return(
                <div className='sub-menu-left'>
                    <div><Link to='/create'>Create listing</Link></div>
                    <div>My Listings</div>
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


export default UserListingPanel;
