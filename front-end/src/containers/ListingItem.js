import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListingItemAction from '../actions/ListingItemAction';
import SubmitBidAction from '../actions/SubmitBidAction';

class ListingItem extends Component {
    constructor(props) {
        super(props);
        this.submitBid = this.submitBid.bind(this);
    }
    componentDidMount() {
        this.props.getListingItem();
    }

    submitBid(event) {
        event.preventDefault();
        if (this.props.userToken === undefined) {
            // Route user to login
        } else {
            var bidAmount = Number(event.target[0].value);
            var listingItem = this.props.listingData[0];

            if (listingItem.current_bid === 'No Bids Yet') {
                listingItem.current_bid = Number(listingItem.starting_bid) - 0.01;
            }
            if (bidAmount < listingItem.current_bid) {
                console.log('bid too low');
            } else {
                console.log('submit to express');
                this.props.submitBidToExpress(bidAmount, listingItem.id, this.props.userToken)
            }
        }
    }

    render() {
        return(
            <div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listingData: state.listing,
        userToken: state.login.token
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListingItem: ListingItemAction,
        submitBidToExpress: SubmitBidAction
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem)
