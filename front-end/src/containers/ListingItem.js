import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery'
import { Button } from 'react-bootstrap';
import ListingItemAction from '../actions/ListingItemAction';
import SubmitBidAction from '../actions/SubmitBidAction';

class ListingItem extends Component {
    constructor(props) {
        super(props);
        this.submitBid = this.submitBid.bind(this);
        this.makePayment = this.makePayment.bind(this);
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

    makePayment() {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_At6FBgV0uygrKlJ76ivhxgDv',
            locale: 'auto',
            token: (token) => {
                var theData = {
                    amount: 10 * 100,
                    stripeToken: token.id,
                    userToken: this.props.tokenData,
                }
                $.ajax({
                    method: 'POST',
                    url: 'http://localhost:3001/stripe',
                    data: theData
                }).done((data) => {
                    console.log(data);
                    if (data.msg === 'paymentSuccess') {

                    }
                });
            }
        });
        handler.open({
            name: "Buy item",
            description: 'Pay for your auction',
            amount: 10 * 100
        })
    }

    render() {
        return(
            <div>
                <Button bsStyle="success" onClick={this.makePayment}>
                    Buy now
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        listingData: state.listing,
        tokenData: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListingItem: ListingItemAction,
        submitBidToExpress: SubmitBidAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem)
