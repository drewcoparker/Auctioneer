import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getListingsAction from '../actions/getListingsAction.js';

class Listings extends Component {

    componentDidMount() {
        this.props.getListingsData();

    }

    render() {
        var listings = [];
        this.props.listingsData.map((listing, index) => {
            return listings.push(
                <div key={index} className='listing-item'>
                    <div className='listing-img'>
                        <img src={listing.url} role='presentation'></img>
                    </div>
                    <div className='listing-content'>
                        <div className='title'>{listing.title}</div>
                        <div className='description'>
                            {listing.description}
                        </div>
                        <div className='current-bid'>
                            ${listing.current_bid}
                        </div>
                        <div className='end-date'>

                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className='listings-wrapper'>
                <h3>Popular listings</h3>
                <div className='listings'>
                    {listings}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listingsData: state.listings
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListingsData: getListingsAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
