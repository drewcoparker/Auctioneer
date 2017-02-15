import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getListingsAction from '../actions/getListingsAction.js';

class Listings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.props.getListingsData();
        return(
            <div className='listings-wrapper'>
                <h3>Popular listings</h3>
                <div className='listings'>
                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src='http://placehold.it/270x270'></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'>Collection</div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src='http://placehold.it/270x270'></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'>Collection</div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src='http://placehold.it/270x270'></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'>Collection</div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

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
